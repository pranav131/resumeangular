import { Component, OnInit, Inject } from '@angular/core';
import { EducationService } from 'src/app/service/education.service';
import { DialogData } from '../education-add/education-add.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { Education } from 'src/app/models/education';

@Component({
  selector: 'app-education-update',
  templateUrl: './education-update.component.html',
  styleUrls: ['./education-update.component.scss']
})
export class EducationUpdateComponent implements OnInit {
  formId = 'education-update-form';
  education: Education = new Education();

  constructor(public dialogRef: MatDialogRef<EducationUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Education ,
    private eduService:EducationService) { }

    onNoClick(): void {
      this.dialogRef.close();
    }
  

  ngOnInit() {

    this.education = {...this.data} ;

  }
  submit(f: NgForm) {
    if (!f.valid) {
      return;
    }
    console.log(this.education , "edu");
    this.eduService.update(this.education).subscribe(()=>{
      this.dialogRef.close(this.education);
    },
    (error)=>{
      console.log(error);
    }
    )
   
  }
}
