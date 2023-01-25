import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { EducationAddComponent } from './education-add/education-add.component';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  searchTerm ='';
  showSearchBox =false;
  ngOnInit() {
    
  }

  applyFilter(val : string){
    this.searchTerm = val;
  }

  showSearch(){
    this.showSearchBox =true;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EducationAddComponent, {
      data: {name: "hello", animal: "dkjdj"}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
