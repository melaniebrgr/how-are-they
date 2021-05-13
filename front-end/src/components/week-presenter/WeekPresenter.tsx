import * as React from 'react';
import { RootState } from '@App/store/reducers';
import { connect } from 'react-redux';

import { medicationRequested } from '@App/domains/medication/medication.actions.js';
import SubtitleStyle from '@App/components/common/Subtitle.style';
import WeekStyle from '@App/components/week-presenter/Week.style';
import DayStyle from '@App/components/week-presenter/Day.style';
import Event from '@App/components/week-presenter/event/Event';
import { selectWeekPresenter } from '@App/components/week-presenter/week-presenter.selecters.js';

interface WeekPresenterProps {
  medicationRequested: typeof medicationRequested;
  week: any;
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
    const { week } = this.props;
    return (
      <>
        <SubtitleStyle>Medication</SubtitleStyle>
        <WeekStyle>
          {week.map((day: any, i: number) => {
            return (
              <DayStyle key={i}>
                {day.map((obs: any) => (<Event key={obs.id} {...obs} />))}
              </DayStyle>
            );
          })}
        </WeekStyle>
      </>
    );
  }
}

const mapStateToProps = (state: RootState, ownProps: object) => selectWeekPresenter(state);

const mapDispatchToProps = {
  medicationRequested: medicationRequested()
};

export default connect(mapStateToProps, mapDispatchToProps)(WeekPresenter);