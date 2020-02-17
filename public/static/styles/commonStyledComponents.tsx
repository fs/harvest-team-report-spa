import styled, { css } from 'styled-components';
import { getContainer } from './commonStyledVariables';

export const Container = styled.div(
  ({ theme: { screens } }) => css`
  margin: 0 auto;
  ${getContainer(screens.xs)}
  ${getContainer(screens.sm)}
  ${getContainer(screens.md)}
  ${getContainer(screens.lg)}
  ${getContainer(screens.xl)}
`,
);
