import styled from 'styled-components';
import colours from '@App/theme/colours';

const DayStyle = styled.div`
  flex-basis: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  &:nth-child(even) {
    background-color: ${colours.lightTeal}
  }
`;

export default DayStyle;
