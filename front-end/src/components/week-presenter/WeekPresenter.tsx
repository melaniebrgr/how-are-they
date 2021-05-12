import * as React from 'react';
import { RootState } from '@App/store/reducers';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import SubtitleStyle from '@App/components/common/Subtitle.style';
import WeekStyle from '@App/components/week-presenter/Week.style';
import DayStyle from '@App/components/week-presenter/Day.style';
import Event from '@App/components/week-presenter/event/Event';

interface WeekPresenterProps {}

interface WeekPresenterState {}

class WeekPresenter extends React.Component<WeekPresenterProps, WeekPresenterState> {
  public constructor(props: WeekPresenterProps) {
    super(props);
  }

  public render() {
    return (
      <>
        <SubtitleStyle>Medication</SubtitleStyle>
        <WeekStyle>
          <DayStyle>
            <Event />
            <Event />
          </DayStyle>
          <DayStyle />
          <DayStyle />
          <DayStyle />
          <DayStyle />
          <DayStyle>
            <Event />
          </DayStyle>
          <DayStyle />
        </WeekStyle>
      </>
    );
  }
}

const mapStateToProps = (state: RootState, ownProps: object) => {};

const mapDispatchToProps = (dispatch: Dispatch<RootState>) => {};

export default connect(mapStateToProps, mapDispatchToProps)(WeekPresenter);