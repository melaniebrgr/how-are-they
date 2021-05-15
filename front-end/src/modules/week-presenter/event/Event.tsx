import * as React from 'react';
import { format } from 'date-fns';

import EventStyle from '@App/modules/week-presenter/event/Event.style';
import { Medication } from '@App/domains/medication/medication.types';

const Event = ({ text, timestamp }: Medication) => {
  return (
    <EventStyle>
      {`✅ ${format(new Date(timestamp), 'H:mm')} ${text}`}
    </EventStyle>
  );
};

export default Event;