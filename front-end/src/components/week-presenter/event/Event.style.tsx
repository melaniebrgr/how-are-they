import styled from 'styled-components';
import colours from '@App/theme/colours';

const EventStyle = styled.div`
  background-color: white;
  border: 1px solid;
  border-radius: 6px;
  border-color: ${colours.midTeal};
  margin: 3px 10px 3px 10px;
  padding: 5px;
  font-family: sans-serif;
  &:first-child {
    margin: 6px 10px 3px 10px;
  }
  &:last-child {
    margin: 3px 10px 6px 10px;
  }
`;

export default EventStyle;