// @flow

import { css } from 'styled-components';
import { stripUnit } from 'polished';

import { spacer } from '../defaultTheme';

export function navDivider(color: string = '#e5e5e5') {
  return css`
    height: 0;
    margin: ${stripUnit(spacer) / 2}rem 0;
    overflow: hidden;
    border-top: 1px solid ${color};
  `;
}

export default navDivider;
