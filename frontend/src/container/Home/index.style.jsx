import styled from 'styled-components';

import Col from '../../component/Col/index.style';
import { TOPBAR_COLOR } from '../../style';

export const SearchRow = styled.div`
  position: fixed;
  width: 100vw;
  background: ${TOPBAR_COLOR};
  height: 50px;
  top: 0;
`;

export const ResultCol = styled(Col)`
  padding-top: 80px;
`;
export const UserDetailLink = styled.div``;
