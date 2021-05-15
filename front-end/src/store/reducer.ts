import { combineReducers } from 'redux';

import medicationReducer from '@App/domains/medication/medication.reducer';

export type RootState = Readonly<{}>;

export const rootReducer = combineReducers<RootState>({
  medication: medicationReducer
});