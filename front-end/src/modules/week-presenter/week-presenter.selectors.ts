import { createSelector, createStructuredSelector } from 'reselect';
import { adjust, append, equals, filter, last, pathOr, range, reduce } from 'ramda';
import { format, getDay, isSameWeek, startOfWeek } from 'date-fns';
import { STATUS } from '@App/store/actions/actions.constants';
import { Medication } from '@App/domains/medication/medication.types';

const selectRequestStatus = createSelector(
  pathOr('', ['medication', 'requestStatus']),
  status => ({
    initial: equals(STATUS.INITIAL, status),
    pending: equals(STATUS.PENDING, status),
    succeeded: equals(STATUS.SUCCESS, status),
    errored: equals(STATUS.ERROR, status),
    cancelled: equals(STATUS.CANCEL, status)
  })
);

const selectEvents = pathOr([], ['medication', 'data']);

const selectMostRecentEvent = createSelector(
  selectEvents,
  last
);

const selectEventsInDateRange = createSelector(
  selectEvents,
  selectMostRecentEvent,
  (events: Medication[], event1?: Medication) => {
    if (event1) {
      return filter((event2: Medication) => isSameWeek(new Date(event1.timestamp), new Date(event2.timestamp)), events);
    } else {
      return [];
    }
  }
);

const groupEventsByDayOfWeek = (group: Medication[][], event: Medication) => {
  const date = new Date(event.timestamp);
  const dayOfWeek = getDay(date);
  return adjust(dayOfWeek, append(event), group);
};

const selectEventsGroupedByDayOfWeek = createSelector(
  selectEventsInDateRange,
  reduce(groupEventsByDayOfWeek, range(0, 7).map(() => []))
);

const selectWeekOfText = createSelector(
  selectMostRecentEvent,
  (event?: Medication) => {
    if (event) {
      const date = startOfWeek(new Date(event.timestamp));
      return `Week of ${format(date, 'MMM d, y')}`;
    }
    return '';
  }
);

export const selectWeekPresenter = createStructuredSelector({
  status: selectRequestStatus,
  week: selectEventsGroupedByDayOfWeek,
  sectionTitle: selectWeekOfText,
});