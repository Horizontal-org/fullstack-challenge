import styled, { css } from 'styled-components';

import { DEFAULT_BG_COLOR, DEFAULT_BORDER_RADIUS, DEFAULT_FONT_SIZE } from '../../style';

const cardCss = css`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); /* this adds the "card" effect */
  padding: ${DEFAULT_FONT_SIZE};
  text-align: center;
  border-radius: ${DEFAULT_BORDER_RADIUS};
  background-color: ${DEFAULT_BG_COLOR};
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || '100%'};
`;

export default styled.div`
  ${cardCss}
`;
