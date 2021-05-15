import styled from 'styled-components';

import colours from '@App/theme/colours';

const Button = styled.button`
  display: inline-block;
  padding: 5px;
  border: 1px solid;
  border-color: ${colours.midGray}
  border-radius: 6px;
  font-family: sans-serif;
  color: ${colours.darkGray}
  text-align: center;
  &:hover{
    color: white;
    background-color: ${colours.midGray};
  }
`;

export default Button;
