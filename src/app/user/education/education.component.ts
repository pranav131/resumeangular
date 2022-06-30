import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EducationAddComponent } from './education-add/education-add.component';
import { Education } from 'src/app/models/education';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  constructor(public dialog: MatDialog, private store: Store<AppState>) { }

  searchTerm = '';
  subscription: any = {};
  showSearchBox = false;
  educations: Education[] = [];
  ngOnInit() {
    this.subscribeToEducation();
  }

  subscribeToEducation() {
    this.subscription.getList = this.store.select(state => state.educations).pipe(
      map(state => {
        return Object.keys(state.entities).map(id => state.entities[id]);
      })
    ).subscribe((educations: Education[]) => {
      this.educations = [...educations];
    });
  }
  applyFilter(val: string) {
    this.searchTerm = val;
  }

  showSearch() {
    this.showSearchBox = true;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EducationAddComponent, {
      data: { name: 'hello', animal: 'dkjdj' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
