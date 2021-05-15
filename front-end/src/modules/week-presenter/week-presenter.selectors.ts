import { createSelector, createStructuredSelector } from 'reselect';
import { adjust, append, equals, filter, length, pathOr, pipe, range, reduce } from 'ramda';
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

const selectWeek = pathOr(startOfWeek(new Date()), ['weekPresenter', 'week']);

const selectEventsInWeek = createSelector(
  selectEvents,
  selectWeek,
  (events: Medication[], week: Date) =>
    filter((event: Medication) => isSameWeek(new Date(week), new Date(event.timestamp)), events)
);

const selectHasEventsInWeek = createSelector(
  selectEventsInWeek,
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

const selectEventsGroupedByDayOfWeek = createSelector(
  selectEventsInWeek,
  reduce(groupEventsByDayOfWeek, range(0, 7).map(() => []))
);

const selectWeekOfText = createSelector(
  selectWeek,
  (week: Date) =>
    `Week of ${format(week, 'MMM d, y')}`
);

export const selectWeekPresenter = createStructuredSelector({
  status: selectRequestStatus,
  week: selectEventsGroupedByDayOfWeek,
  weekHasEvents: selectHasEventsInWeek,
  sectionTitle: selectWeekOfText,
});