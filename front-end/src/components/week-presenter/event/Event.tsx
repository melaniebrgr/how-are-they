import * as React from 'react';
import { format } from 'date-fns';

import EventStyle from '@App/components/week-presenter/event/Event.style';
import { Medication } from '@App/domains/medication/medication.types';

const Event = (props: Medication) => {
  return (
    <EventStyle>
      <span>✅</span>
      <span>{`Taken at ${format(new Date(props.timestamp), 'MM/dd/yyyy')}`}</span>
    </EventStyle>
  );
};

export default Event;