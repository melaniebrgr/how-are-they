import * as React from 'react';
import { format } from 'date-fns';

import EventStyle from '@App/modules/week-presenter/event/Event.style';

interface Props {
  text: string,
  timestamp: string
}

const Event = ({ text, timestamp }: Props) => {
  return (
    <EventStyle>
      {`✅ ${format(new Date(timestamp), 'H:mm')} ${text}`}
    </EventStyle>
  );
};

export default Event;