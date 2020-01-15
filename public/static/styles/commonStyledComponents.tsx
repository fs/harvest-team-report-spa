import styled from 'styled-components';
import { container } from './commonStyledVariables';
import { Screens } from '../config/screens';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  margin: 0 auto;
  ${container[Screens.xs]}
  ${container[Screens.sm]}
  ${container[Screens.md]}
  ${container[Screens.lg]}
  ${container[Screens.xl]}
`;
