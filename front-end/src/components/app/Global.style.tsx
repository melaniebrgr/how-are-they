import { createGlobalStyle } from 'styled-components';

import colours from '@App/theme/colours';

const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    background-color: ${colours.offWhite};
    > div {
      height: 100%;
    }
  }
`;

export default GlobalStyle;