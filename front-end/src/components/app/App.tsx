import * as React from 'react';
import { RootState } from '@App/store/reducers';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import GlobalStyle from '@App/components/app/Global.style';
import AppStyle from '@App/components/app/App.style';
import TitleStyle from '@App/components/Title.style';

interface AppProps {}

interface AppState {}

class App extends React.Component<AppProps, AppState> {
  public constructor(props: AppProps) {
    super(props);
  }

  public render() {
    return (
      <>
        <GlobalStyle />
        <AppStyle>
          <TitleStyle>How are they?</TitleStyle>
        </AppStyle>
      </>
    );
  }
}

const mapStateToProps = (state: RootState, ownProps: object) => {};

const mapDispatchToProps = (dispatch: Dispatch<RootState>) => {};

export default connect(mapStateToProps, mapDispatchToProps)(App);