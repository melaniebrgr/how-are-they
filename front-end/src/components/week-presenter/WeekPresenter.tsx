import * as React from 'react';
import { RootState } from '@App/store/reducers';
import { connect } from 'react-redux';

import { medicationRequested, MedicationRequestedAction } from '@App/domains/medication/medication.actions';
import SubtitleStyle from '@App/components/common/Subtitle.style';
import SectionTitle from '@App/components/common/SectionTitle.style';
import WeekStyle from '@App/components/week-presenter/Week.style';
import DayStyle from '@App/components/week-presenter/Day.style';
import Event from '@App/components/week-presenter/event/Event';
import { selectWeekPresenter } from '@App/components/week-presenter/week-presenter.selectors';

import { Medication } from '@App/domains/medication/medication.types';
interface WeekPresenterProps {
  medicationRequested: () => MedicationRequestedAction;
  status: { 
    pending: boolean,
    succeeded: boolean,
    errored: boolean,
    cancelled: boolean
  };
  week: Medication[][];
  sectionTitle: string;
}

interface WeekPresenterState {}

class WeekPresenter extends React.Component<WeekPresenterProps, WeekPresenterState> {
  public constructor(props: WeekPresenterProps) {
    super(props);
  }

  componentDidMount() {
    this.props.medicationRequested();
  }

  public render() {
    const { status, week, sectionTitle } = this.props;
    return (
      <>
        <SubtitleStyle>Medication</SubtitleStyle>
        <SectionTitle>{sectionTitle}</SectionTitle>
        {status.pending && <p>Loading data...</p>}
        {(status.errored || status.cancelled) && <p>Something went wrong.</p>}
        {status.succeeded &&
          (<WeekStyle>
            {week.map((day: Medication[], i: number) => {
              return (
                <DayStyle key={i}>
                  {day.map((medication: Medication) => (<Event key={medication.id} {...medication} />))}
                </DayStyle>
              );
            })}
          </WeekStyle>)}
      </>
    );
  }
}

const mapStateToProps = (state: RootState, ownProps: object) => selectWeekPresenter(state);

const mapDispatchToProps = {
  medicationRequested: medicationRequested()
};

export default connect(mapStateToProps, mapDispatchToProps)(WeekPresenter);