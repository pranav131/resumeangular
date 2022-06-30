import { Injectable, Pipe } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EducationService } from '../../service/education.service';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { catchError, map, mergeMap, switchMap, } from 'rxjs/operators';
import { LoadEducations, EducationActionTypes,
  LoadEducationsSuccess, LoadEducationsFail, AddEducation,
  AddEducationSuccess, AddEducationFail, UpdateEducation,
   UpdateEducationSuccess, UpdateEducationFail, DeleteEducation,
   DeleteEducationSuccess, DeleteEducationFail } from './education.actions';
import { Education } from '../../models/education';



@Injectable()
export class EducationEffects {

  constructor(private actions$: Actions<Action> , private eduService: EducationService) {}

  @Effect()
  loadEducation(): Observable<Action> {
    return this.actions$.
    pipe(
      ofType<LoadEducations>(EducationActionTypes.LoadEducations),
       mergeMap( (action) => {
         return this.eduService.getAll().
         pipe(
           map( (data: Education[]) => new LoadEducationsSuccess({educations: data})),
           catchError( error => of(new LoadEducationsFail(error))
           )
      );
    })
    );
  }

  @Effect()
  addEducation(): Observable<Action> {
    return this.actions$.
    pipe(
      ofType<AddEducation>(EducationActionTypes.AddEducation),
       switchMap( (action) => {
         return this.eduService.add(action.payload.education).
         pipe(
           map( (event: Education) => new AddEducationSuccess({education: event})),
           catchError( error => of(new AddEducationFail(error))
           )
      );
    })
    );
  }

  @Effect()
  updateEducation(): Observable<Action> {
    return this.actions$.
    pipe(
      ofType<UpdateEducation>(EducationActionTypes.UpdateEducation),
       switchMap( (action) => {
         return this.eduService.update(action.payload.education).
         pipe(
           map( () => new UpdateEducationSuccess({education: action.payload.education})),
           catchError( error => of(new UpdateEducationFail(error))
           )
      );
    })
    );
  }

  @Effect()
  deleteEducation(): Observable<Action> {
    return this.actions$.
    pipe(
      ofType<DeleteEducation>(EducationActionTypes.DeleteEducation),
       mergeMap( (action) => {
         return this.eduService.delete(action.payload.id).
         pipe(
           map( () => new DeleteEducationSuccess({id: action.payload.id})),
           catchError( error => of(new DeleteEducationFail(error))
           )
      );
    })
    );
  }
}
