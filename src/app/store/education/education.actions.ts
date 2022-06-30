import { Action } from '@ngrx/store';
import { Education } from '../../models/education';

export enum EducationActionTypes {
  LoadEducations = '[Education] Load Educations',
  LoadEducationsSuccess = '[Education] Load Educations Success',
  LoadEducationsFail = '[Education] Load Educations Fail',
  AddEducation = '[Education] Add Education',
  AddEducationSuccess = '[Education] Add Education Success',
  AddEducationFail = '[Education] Add Education Fail',
  UpdateEducation = '[Education] Update Education Fail',
  UpdateEducationSuccess = '[Education] Update Education Success',
  UpdateEducationFail = '[Education] Update Education Fail',
  DeleteEducation = '[Education] Delete Education',
  DeleteEducationSuccess = '[Education] Delete Education Success',
  DeleteEducationFail = '[Education] Delete Education Fail',
}

export class LoadEducations implements Action {
  readonly type = EducationActionTypes.LoadEducations;
}

export class LoadEducationsSuccess implements Action {
  readonly type = EducationActionTypes.LoadEducationsSuccess;

  constructor(public payload: { educations: Education[] }) {}
}


export class LoadEducationsFail implements Action {
  readonly type = EducationActionTypes.LoadEducationsFail;

  constructor(public payload: any) {}
}

export class AddEducation implements Action {
  readonly type = EducationActionTypes.AddEducation;

  constructor(public payload: { education: Education }) {}
}


export class AddEducationSuccess implements Action {
  readonly type = EducationActionTypes.AddEducationSuccess;

  constructor(public payload: { education: Education }) {}
}


export class AddEducationFail implements Action {
  readonly type = EducationActionTypes.AddEducationFail;

  constructor(public payload: any) {}
}


export class UpdateEducation implements Action {
  readonly type = EducationActionTypes.UpdateEducation;

  constructor(public payload: { education: Education }) {}
}

export class UpdateEducationSuccess implements Action {
  readonly type = EducationActionTypes.UpdateEducationSuccess;

  constructor(public payload: { education: Education }) {}
}
export class UpdateEducationFail implements Action {
  readonly type = EducationActionTypes.UpdateEducationFail;

  constructor(public payload: any) {}
}

export class DeleteEducation implements Action {
  readonly type = EducationActionTypes.DeleteEducation;

  constructor(public payload: { id: number }) {}
}

export class DeleteEducationSuccess implements Action {
  readonly type = EducationActionTypes.DeleteEducationSuccess;

  constructor(public payload: { id: number } ) {}
}

export class DeleteEducationFail implements Action {
  readonly type = EducationActionTypes.DeleteEducationFail;

  constructor(public payload: any) {}
}

export type EducationActions =
  LoadEducations
 | LoadEducationsSuccess
 | LoadEducationsFail
 | AddEducation
 | AddEducationSuccess
 | AddEducationFail
 | UpdateEducation
 | UpdateEducationFail
 | UpdateEducationSuccess
 | DeleteEducation
 | DeleteEducationSuccess
 | DeleteEducationFail
;
