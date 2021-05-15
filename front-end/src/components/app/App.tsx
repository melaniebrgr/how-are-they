import * as React from 'react';

import GlobalStyle from '@App/components/app/Global.style';
import AppStyle from '@App/components/app/App.style';
import TitleStyle from '@App/components/common/Title.style';
import WeekPresenter from '@App/components/week-presenter/WeekPresenter';

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