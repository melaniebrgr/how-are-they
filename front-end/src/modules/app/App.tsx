import * as React from 'react';

import GlobalStyle from '@App/modules/app/Global.style';
import AppStyle from '@App/modules/app/App.style';
import TitleStyle from '@App/common/Title.style';
import WeekPresenter from '@App/modules/week-presenter/WeekPresenter';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppStyle>
        <TitleStyle>How are they?</TitleStyle>
        <WeekPresenter />
      </AppStyle>
    </>
  );
};

export default App;