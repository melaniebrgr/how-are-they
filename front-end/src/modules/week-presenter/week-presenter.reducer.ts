import { Action } from 'redux-actions';
import { last } from 'ramda';
import { startOfWeek, addWeeks, subWeeks } from 'date-fns';
import { medicationStatus } from '@App/domains/medication/medication.actions';
import { Medication } from '@App/domains/medication/medication.types';
import { WEEK } from '@App/modules/week-presenter/week-presenter.actions';

const INITIAL_STATE = {
  week: startOfWeek(new Date())
};

const weekPresenterReducer = (state = INITIAL_STATE, { type, payload }: Action<any>) => {
  switch (type) {
    case medicationStatus.success:
      const mostRecentEvent: unknown = last(payload);
      if (mostRecentEvent) {
        return {
          week: startOfWeek(new Date((mostRecentEvent as Medication).timestamp))
        };
      } else {
        return state;
      }
    case WEEK.PREV_REQUESTED:
      return {
        week: subWeeks(new Date(state.week), 1)
      };
    case WEEK.NEXT_REQUESTED:
      return {
        week: addWeeks(new Date(state.week), 1)
      };
    default:
      return state;
  }
};

export default weekPresenterReducer;