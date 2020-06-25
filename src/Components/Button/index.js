import styled, { css } from 'styled-components';
/* Config */
import { colors, theme } from 'config';

const Button = styled.div`
  /* Display & Box Model */
  width: 7.5rem;
  height: 7.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Styling */
  border-radius: 50%;
  box-shadow: ${theme.common.boxShadow};
  color: ${colors.gray};
  &:active {
    box-shadow: ${theme.common.activeBoxShadow};
  }
  /* Small */
  ${props =>
    props.small &&
    css`
      /* Styling */
      width: 5rem;
      height: 5rem;
    `};

  /* highlight */
  ${props =>
    props.highlight &&
    css`
      /* Styling */
      background: ${colors.blue};
      box-shadow: ${theme.common.blueBoxShadow};
      color: ${colors.white};
      &:active {
        box-shadow: ${theme.common.blueActiveBoxShadow};
      }
    `};
`;

const Icon = styled.i`
  /* Styling */
  color: inherit;
  /* Text */
  font-size: 1.5rem;
`;

Button.Icon = Icon;

export default Button;
