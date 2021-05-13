import * as React from 'react';
import { RootState } from '@App/store/reducers';
import { connect } from 'react-redux';

import { medicationRequested } from '@App/domains/medication/medication.actions.js';
import SubtitleStyle from '@App/components/common/Subtitle.style';
import WeekStyle from '@App/components/week-presenter/Week.style';
import DayStyle from '@App/components/week-presenter/Day.style';
import Event from '@App/components/week-presenter/event/Event';
import { selectWeekPresenter } from '@App/components/week-presenter/week-presenter.selecters.js';

import { Medication } from '@App/domains/medication/medication.types';
interface WeekPresenterProps {
  medicationRequested: typeof medicationRequested;
  week: Medication[][];
  hasEvents: boolean;
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
    const { week, hasEvents } = this.props;
    return (
      <>
        <SubtitleStyle>Medication</SubtitleStyle>
        {hasEvents
          ? (<WeekStyle>
              {week.map((day: Medication[], i: number) => {
                return (
                  <DayStyle key={i}>
                    {day.map((medication: Medication) => (<Event key={medication.id} {...medication} />))}
                  </DayStyle>
                );
              })}
            </WeekStyle>)
          : <p>No data in range.</p>

        }

      </>
    );
  }
}

const mapStateToProps = (state: RootState, ownProps: object) => selectWeekPresenter(state);

const mapDispatchToProps = {
  medicationRequested: medicationRequested()
};

export default connect(mapStateToProps, mapDispatchToProps)(WeekPresenter);