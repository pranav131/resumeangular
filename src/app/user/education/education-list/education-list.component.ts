import { DeleteEducation } from './../../../store/education/education.actions';
import { Store } from '@ngrx/store';
import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Education } from 'src/app/models/education';
import { EducationAddComponent } from '../education-add/education-add.component';
import { MatDialog } from '@angular/material/dialog';
import { EducationUpdateComponent } from '../education-update/education-update.component';
import { ConfirmComponent } from 'src/app/shared/components/confirm/confirm.component';
import { EducationService } from 'src/app/service/education.service';
import { AppState } from 'src/app/reducers';

@Component({
  selector: 'app-education-list',
  templateUrl: './education-list.component.html',
  styleUrls: ['./education-list.component.scss']
})
export class EducationListComponent implements OnInit, OnChanges {


  constructor(private store: Store<AppState>,
              private dialog: MatDialog) { }
  @Input() searchTerm: string;
  @Input() educations: Education[] = [];

  displayedColumns: string[] = ['title', 'institute', 'marks', 'action'];
  dataSource = new MatTableDataSource();

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.searchTerm) {
      this.applyFilter();
    }
    if (changes.educations) {
      this.dataSource.data = [...this.educations];
    }
  }
  applyFilter() {
    this.dataSource.filter = this.searchTerm;
  }

  openDialog(edu: Education,
  ) {
    const dialogRef = this.dialog.open(EducationUpdateComponent, {
      data: edu,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openDeleteDialog(edu: Education) {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      data: edu,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch( new DeleteEducation( {
          id: edu.id
        })) ;
      }

    });
  }

}
