import * as React from 'react';
import { RootState } from '@App/store/reducers';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

interface EventProps {}

interface EventState {}

class Event extends React.Component<EventProps, EventState> {
  public constructor(props: EventProps) {
    super(props);
  }

  public render() {
    return (
      <div>
        <span>🧑‍⚕️</span>
        <span>taken</span>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState, ownProps: object) => {};

const mapDispatchToProps = (dispatch: Dispatch<RootState>) => {};

export default connect(mapStateToProps, mapDispatchToProps)(Event);