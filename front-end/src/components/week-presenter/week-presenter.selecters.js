import { pathOr, pipe, takeLast } from 'ramda';
import { createSelector, createStructuredSelector } from 'reselect';

const selectMedication = pathOr([], ['medication', 'data']);

const selectLastTenMedicationEvents = createSelector(
  selectMedication,
  pipe(
    takeLast(10),
    medication => ({
      monday: medication
    })
  )
);

export const selectWeekPresenter = createStructuredSelector({
  week: selectLastTenMedicationEvents
})