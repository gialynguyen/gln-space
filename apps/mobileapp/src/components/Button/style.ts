import styled from 'styled-components';
import {CYAN_BLUE, WHITE} from '../../constants/styles/colors';

import CustomButton from './Button';

export const Button = styled(CustomButton)`
  padding: 20px;
  color: ${WHITE};
  font-size: 50px;
  border-radius: 17px;
  background-color: ${CYAN_BLUE};
`;
