import { createAction, Action } from 'redux-actions';

export const WEEK = {
  PREV_REQUESTED: 'week/prevRequested',
  NEXT_REQUESTED: 'week/nextRequested'
};

export type WeekRequestedAction = Action<undefined>;
export const prevWeekRequested = ()  => createAction(WEEK.PREV_REQUESTED);
export const nextWeekRequested = ()  => createAction(WEEK.NEXT_REQUESTED);