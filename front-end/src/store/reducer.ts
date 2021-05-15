import { combineReducers } from 'redux';

import medicationReducer from '@App/domains/medication/medication.reducer';
import weekPresenterReducer from '@App/modules/week-presenter/week-presenter.reducer';

export type RootState = Readonly<{}>;

export const rootReducer = combineReducers<RootState>({
  medication: medicationReducer,
  weekPresenter: weekPresenterReducer,
});