import styled, { css } from 'styled-components';

import Col from '../../../../component/Col/index.style';

const cardLink = css`
  margin: 0;
  cursor: pointer;
  text-decoration: underline;
`;

export const UserCardCol = styled(Col)`
  margin-left: 0;
  margin-right: 0;
`;

export const Label = styled.label`
  font-size: 14px;
  text-align: left;
  display: block;
`;
export const Description = styled.p`
  font-size: 14px;
  margin: 0 auto;
  font-weight: 300;
  text-align: left;
`;

export const Title = styled.h4`
  margin: 0 auto;
  line-height: 50px;
  padding-left: 20px;
`;

export const MobileLink = styled.span`
  ${cardLink}
`;
export const EmailLink = styled.span`
  ${cardLink}
`;
