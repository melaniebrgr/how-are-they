import { createSelector, createStructuredSelector } from 'reselect';
import { adjust, append, filter, last, length, pathOr, pipe, range, reduce } from 'ramda';
import { getDay, isSameWeek } from 'date-fns'

const selectMedicationEvents = pathOr([], ['medication', 'data']);

const selectMedicationEventsInRange = createSelector(
  selectMedicationEvents,
  events => {
    const event1 = last(events);
    if (!event1) return [];
    return filter(event2 => 
      isSameWeek(new Date(event1.timestamp), new Date(event2.timestamp)
    ), events);
  }
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