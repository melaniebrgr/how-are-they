import { createSelector, createStructuredSelector } from 'reselect';
import { adjust, append, length, pathOr, pipe, range, reduce, takeLast } from 'ramda';
import { getDay } from 'date-fns'

const selectMedicationEvents = pathOr([], ['medication', 'data']);

const selectMedicationEventsInRange = createSelector(
  selectMedicationEvents,
  takeLast(10) // TODO: get by week
);

const selectHasMedicationEventsInRange = createSelector(
  selectMedicationEventsInRange,
  pipe(
    length,
    Boolean
  )
)

const selectLastTenMedicationEvents = createSelector(
  selectMedicationEventsInRange,
  reduce((group, obs) => {
    const date = new Date(obs.timestamp);
    const dayOfWeek = getDay(date);
    return adjust(dayOfWeek, append(obs), group);
  }, range(0,7).map(() => []))
);

export const selectWeekPresenter = createStructuredSelector({
  week: selectLastTenMedicationEvents,
  hasEvents: selectHasMedicationEventsInRange
})