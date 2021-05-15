import * as React from 'react';
import { connect } from 'react-redux';

import { medicationRequested, MedicationRequestedAction } from '@App/domains/medication/medication.actions';
import { prevWeekRequested, nextWeekRequested, WeekRequestedAction } from '@App/modules/week-presenter/week-presenter.actions';
import { selectWeekPresenter } from '@App/modules/week-presenter/week-presenter.selectors';
import { daysOfTheWeek } from '@App/modules/week-presenter/week-presenter.utils';
import SubtitleStyle from '@App/common/Subtitle.style';
import Button from '@App/common/Button.style';
import SectionTitle from '@App/modules/week-presenter/SectionTitle.style';
import WeekStyle from '@App/modules/week-presenter/Week.style';
import DayStyle from '@App/modules/week-presenter/Day.style';
import DayTitle from '@App/modules/week-presenter/DayTitle.style';
import Event from '@App/modules/week-presenter/event/Event';

import { Medication } from '@App/domains/medication/medication.types';
interface WeekPresenterProps {
  handleMedicationRequested: () => MedicationRequestedAction;
  handlePrevWeekRequested: () => WeekRequestedAction;
  handleNextWeekRequested: () => WeekRequestedAction;
  status: { 
    pending: boolean,
    succeeded: boolean,
    errored: boolean,
    cancelled: boolean
  };
  week: Medication[][];
  weekHasEvents: boolean;
  sectionTitle: string;
}

interface WeekPresenterState {}

class WeekPresenter extends React.Component<WeekPresenterProps, WeekPresenterState> {
  public constructor(props: WeekPresenterProps) {
    super(props);
  }

  componentDidMount() {
    this.props.handleMedicationRequested();
  }

  public render() {
    const { handlePrevWeekRequested, handleNextWeekRequested, status, week, weekHasEvents, sectionTitle } = this.props;
    return (
      <>
        <header>
          <SubtitleStyle>Medication</SubtitleStyle>
          <Button onClick={handlePrevWeekRequested}>Previous week</Button>
          <SectionTitle>{sectionTitle}</SectionTitle>
          <Button onClick={handleNextWeekRequested}>Next week</Button>
        </header>
        {status.pending && <p>Loading data...</p>}
        {(status.errored || status.cancelled) && <p>Something went wrong.</p>}
        {(status.succeeded && weekHasEvents) &&
          (<WeekStyle>
            {week.map((day: Medication[], i: number) => {
              return (
                <DayStyle key={i}>
                  <>
                    <DayTitle>{daysOfTheWeek[i]}</DayTitle>
                    {day.map((medication: Medication) => (<Event key={medication.id} {...medication} />))}
                  </>
                </DayStyle>
              );
            })}
          </WeekStyle>)}
        {(status.succeeded && !weekHasEvents) && <p>No medication taken this week.</p>}
      </>
    );
  }
}

const mapDispatchToProps = {
  handleMedicationRequested: medicationRequested(),
  handlePrevWeekRequested: prevWeekRequested(),
  handleNextWeekRequested: nextWeekRequested(),
};

export default connect(selectWeekPresenter, mapDispatchToProps)(WeekPresenter);