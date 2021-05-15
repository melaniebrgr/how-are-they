import { createSelector, createStructuredSelector } from 'reselect';
import { adjust, append, filter, last, length, pathOr, pipe, range, reduce } from 'ramda';
import { getDay, isSameWeek } from 'date-fns';
import { Medication } from '@App/domains/medication/medication.types';

const selectMedicationEvents = pathOr([], ['medication', 'data']);

const selectMedicationEventsInRange = createSelector(
  selectMedicationEvents,
  events => {
    const lastEvent = last(events);
    if (lastEvent) {
      const event1: Medication = lastEvent;
      return filter((event2: Medication) => isSameWeek(new Date(event1.timestamp), new Date(event2.timestamp)), events);
    } else {
      return [];
    }
  }
);

const selectHasMedicationEventsInRange = createSelector(
  selectMedicationEventsInRange,
  pipe(
    length,
    Boolean
  )
);

const groupEventsByDayOfWeek = (group: Medication[][], event: Medication) => {
  const date = new Date(event.timestamp);
  const dayOfWeek = getDay(date);
  return adjust(dayOfWeek, append(event), group);
};

const selectLastTenMedicationEvents = createSelector(
  selectMedicationEventsInRange,
  reduce(groupEventsByDayOfWeek, range(0, 7).map(() => []))
);

export const selectWeekPresenter = createStructuredSelector({
  week: selectLastTenMedicationEvents,
  hasEvents: selectHasMedicationEventsInRange
});