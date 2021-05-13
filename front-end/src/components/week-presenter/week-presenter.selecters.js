import { createSelector, createStructuredSelector } from 'reselect';
import { adjust, append, pathOr, pipe, range, reduce, takeLast } from 'ramda';
import { getDay } from 'date-fns'

const selectMedication = pathOr([], ['medication', 'data']);

const selectLastTenMedicationEvents = createSelector(
  selectMedication,
  pipe(
    takeLast(10),
    reduce((group, obs) => {
      const date = new Date(obs.timestamp);
      const dayOfWeek = getDay(date);
      return adjust(dayOfWeek, append(obs), group);
    }, range(0,7).map(() => []))
  )
);

export const selectWeekPresenter = createStructuredSelector({
  week: selectLastTenMedicationEvents
})