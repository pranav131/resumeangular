import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Education } from '../../models/education';
import { EducationActions, EducationActionTypes, AddEducationSuccess } from './education.actions';

export interface State extends EntityState<Education> {
  loading: boolean;
  loaded: boolean;
  // additional entities state properties
}

export const adapter: EntityAdapter<Education> = createEntityAdapter<Education>();

export const initialState: State = adapter.getInitialState({
  loading: false,
  loaded: false
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: EducationActions
): State {
  switch (action.type) {

    case EducationActionTypes.LoadEducations: {
      return {
        ...initialState,
        loading: true,
        loaded: false
      };

    }

    case EducationActionTypes.LoadEducationsSuccess: {
      return {
        ...adapter.addAll(action.payload.educations , state),
        loading: false,
        loaded: true
      };
    }

    case EducationActionTypes.UpdateEducationSuccess:
    case EducationActionTypes.AddEducationSuccess: {
      return {
        ...adapter.upsertOne(action.payload.education, state)
      };
    }

    case EducationActionTypes.DeleteEducationSuccess: {
      return adapter.removeOne(action.payload.id, state);
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors() ;
