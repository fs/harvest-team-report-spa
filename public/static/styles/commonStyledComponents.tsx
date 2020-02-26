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

export const ProgressLineWrapper = styled.div(
  ({ theme: { screens, screenOnly, colors } }) => css`
    position: relative;
    min-width: 300px;
    height: 16px;
    border-radius: 5px;
    border: 1px solid ${colors.progressLineBorder};
    overflow: hidden;
    ${screenOnly(screens.sm)} {
      min-width: 150px;
    }
    ${screenOnly(screens.xs)} {
      min-width: 100px;
    }
  `,
);
