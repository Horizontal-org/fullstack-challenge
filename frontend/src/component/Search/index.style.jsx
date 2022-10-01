import styled, { css } from 'styled-components';

import { DEFAULT_BORDER_RADIUS } from '../../style';
const searchInput = css`
  width: 100vw;
  padding: 4px;
  border: ${DEFAULT_BORDER_RADIUS} solid #111d5e;
  border-radius: 10px 10px 10px 10px;
  background-color: white;
  outline: none;
  font-size: 20px;
`;

export const SearchContainer = styled.div`
  width: 100vw;
  position: relative;
  display: flex;
`;

export const SearchInput = styled.input`
  ${searchInput}
`;
