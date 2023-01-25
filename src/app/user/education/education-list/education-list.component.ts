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

@Component({
  selector: 'app-education-list',
  templateUrl: './education-list.component.html',
  styleUrls: ['./education-list.component.scss']
})
export class EducationListComponent implements OnInit, OnChanges {
  

  constructor(private http: HttpClient, private eduService:EducationService,
    private dialog: MatDialog) { }
  @Input() searchTerm: string;
  displayedColumns: string[] = ['title', 'institute', 'marks', 'action'];
  dataSource = new MatTableDataSource();
  education = [
    { title: 'Graduation', institute: 'Lakshmi Narain College of Technology', marks: '8.15 CGPA' },
    { title: 'Higher secondary', institute: 'K.P. Hindu Inter College', marks: '83.6%' },
    { title: 'High school', institute: 'St. Anthony\'s Inter College', marks: '88.6%' }
  ];
  ngOnInit() {
    //this.eduService.getAll().subscribe((res:Education[])=>{
      this.dataSource.data=this.education;
    // },(error)=>{
    //   console.log(error)
    // });
    }
    
  

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.searchTerm) {
     this.applyFilter();
    }
  }
  applyFilter() {
    this.dataSource.filter = this.searchTerm;
  }

  openDialog(edu:Education,
    ){
    const dialogRef = this.dialog.open(EducationUpdateComponent, {
      data: edu,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openDeleteDialog(edu:Education){
    const dialogRef = this.dialog.open(ConfirmComponent, {
      data: edu,
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){

        this.eduService.delete(edu).subscribe(()=>{

        } ,(error)=>{
console.log(error);
        });

      }
     
    });
  }

}
