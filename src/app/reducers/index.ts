import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromEducation from '../store/education/education.reducer';

export interface AppState {

  educations: fromEducation.State;
}

export const reducers: ActionReducerMap<AppState> = {

  educations: fromEducation.reducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
