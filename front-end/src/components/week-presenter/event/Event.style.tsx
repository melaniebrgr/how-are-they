import styled from 'styled-components';
import colours from '@App/theme/colours';

const EventStyle = styled.div`
  background-color: white;
  border: 1px solid;
  border-radius: 6px;
  border-color: ${colours.midTeal};
  margin: 5px;
  padding: 5px;
  font-family: sans-serif;
  
  &: hover {
    background-color: ${colours.lightTeal};
  }
`;

export default EventStyle;