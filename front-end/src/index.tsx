import * as React from 'react';
import * as ReactDOM from 'react-dom';
import store from '@App/store/store';
import { Provider } from 'react-redux';
import App from '@App/modules/app/App';

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
