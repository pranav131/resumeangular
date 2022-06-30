import { Actions, ofType } from '@ngrx/effects';
import { AddEducation, EducationActionTypes } from './../../../store/education/education.actions';
import { Store, Action } from '@ngrx/store';
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { Education } from 'src/app/models/education';
import { EducationService } from 'src/app/service/education.service';
import { AppState } from 'src/app/reducers';
import { map, debounceTime, take } from 'rxjs/operators';
import { SubscriptionLike } from 'rxjs';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-education-add',
  templateUrl: './education-add.component.html',
  styleUrls: ['./education-add.component.scss']
})
export class EducationAddComponent implements OnInit, OnDestroy {

  constructor(
    public dialogRef: MatDialogRef<EducationAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private store: Store<AppState>, private action$: Actions<Action>) { }

  formId = 'education-add-form';
  education: Education = new Education();
  subscription: any = {};

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {

  }
  submit(f: NgForm) {
    if (!f.valid) {
      return;
    }

    this.subscribeToResult();
    this.store.dispatch(new AddEducation({
      education: this.education
    }));


  }

  subscribeToResult() {
    this.subscription.success = this.action$.pipe(
      ofType(EducationActionTypes.AddEducationSuccess),
      debounceTime(200), map((action: any) => action.payload),
      take(1)
    ).subscribe((data:any) => {
      if (this.subscription.error) {
        this.subscription.error.unsubscribe();
      }
      console.log(this.education, 'edu');
      this.dialogRef.close();
    });

    this.subscription.error = this.action$.pipe(
      ofType(EducationActionTypes.AddEducationFail),
      map((action: any) => action.payload)
    ).subscribe((error) => {
      if (this.subscription.success) {
        this.subscription.success.unsubscribe();
      }
      this.dialogRef.close();
      console.log(error);
    });
  }


  ngOnDestroy() {
    if (this.subscription) {
    }
  }
}
