import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { Education } from 'src/app/models/education';
import { EducationService } from 'src/app/service/education.service';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-education-add',
  templateUrl: './education-add.component.html',
  styleUrls: ['./education-add.component.scss']
})
export class EducationAddComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EducationAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData , private eduService:EducationService) { }

  formId = 'education-add-form';
  education: Education = new Education();

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    
  }
  submit(f: NgForm) {
    if (!f.valid) {
      return;
    }
    console.log(this.education , "edu");
    
   /* this.eduService.add(this.education).subscribe(()=>{
      this.dialogRef.close(this.education);
    },
    (error)=>{
      console.log(error);
    }
    )
    */
   
  }

}
