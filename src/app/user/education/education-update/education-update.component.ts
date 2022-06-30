import { UpdateEducation, EducationActionTypes } from './../../../store/education/education.actions';
import { Component, OnInit, Inject } from '@angular/core';
import { EducationService } from 'src/app/service/education.service';
import { DialogData } from '../education-add/education-add.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { Education } from 'src/app/models/education';
import { Store, Action } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { ofType, Actions } from '@ngrx/effects';
import { map, take, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-education-update',
  templateUrl: './education-update.component.html',
  styleUrls: ['./education-update.component.scss']
})
export class EducationUpdateComponent implements OnInit {
  formId = 'education-update-form';
  education: Education = new Education();
  subscription: any = {};

  constructor(public dialogRef: MatDialogRef<EducationUpdateComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Education,
              private store: Store<AppState> , private action$: Actions<Action>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }


  ngOnInit() {

    this.education = { ...this.data };

  }
  submit(f: NgForm) {
    if (!f.valid) {
      return;
    }
    this.store.dispatch( new UpdateEducation({
      education: this.education
    }));
    this.subscribeToResult();

  }

  subscribeToResult() {
    this.subscription.success = this.action$.pipe(
      ofType(EducationActionTypes.UpdateEducationSuccess),
      debounceTime(200), map((action: any) => action.payload),
      take(1)
    ).subscribe((data: any) => {
      if (this.subscription.error) {
        this.subscription.error.unsubscribe();
      }
      console.log(this.education, 'edu');
      this.dialogRef.close();
    });

    this.subscription.error = this.action$.pipe(
      ofType(EducationActionTypes.UpdateEducationFail),
      map((action: any) => action.payload)
    ).subscribe((error) => {
      if (this.subscription.success) {
        this.subscription.success.unsubscribe();
      }
      this.dialogRef.close();
      console.log(error);
    });
  }
}
