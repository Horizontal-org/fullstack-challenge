import styled, { css } from 'styled-components';

const block = css`
  display: block;
`;
const none = css`
  display: none;
`;
const defaultMargin = css`
  margin: 8px;
`;
const colSpan = css`
  ${({ span = 1 }) => (span > 0 ? block : none)};
  flex: 0 0 ${({ span = 1 }) => (100 * (span ? span : 1)) / 24}%;
  max-width: ${({ span = 1 }) => (100 * (span ? span : 1)) / 24}%;
`;

const mediaColSpan = css`
  @media screen and (max-width: 576px) {
    ${({ xs = 1 }) => (xs ? (xs > 0 ? block : none) : none)};
    flex: 0 0 ${({ xs }) => (100 * (xs ? xs : 1)) / 24}%;
    max-width: ${({ xs }) => (100 * (xs ? xs : 1)) / 24}%;
  }
  @media screen and (min-width: 576px) {
    ${({ sm = 1 }) => (sm ? (sm > 0 ? block : none) : none)};
    flex: 0 0 ${({ sm }) => (100 * (sm ? sm : 1)) / 24}%;
    max-width: ${({ sm }) => (100 * (sm ? sm : 1)) / 24}%;
  }
  @media screen and (min-width: 768px) {
    ${({ md = 1 }) => (md ? (md > 0 ? block : none) : none)};
    flex: 0 0 ${({ md }) => (100 * (md ? md : 1)) / 24}%;
    max-width: ${({ md }) => (100 * (md ? md : 1)) / 24}%;
  }
  @media screen and (min-width: 992px) {
    ${({ lg = 1 }) => (lg ? (lg > 0 ? block : none) : none)};
    flex: 0 0 ${({ lg }) => (100 * (lg ? lg : 1)) / 24}%;
    max-width: ${({ lg }) => (100 * (lg ? lg : 1)) / 24}%;
  }
  @media screen and (min-width: 1200px) {
    ${({ xl = 1 }) => (xl ? (xl > 0 ? block : none) : none)};
    flex: 0 0 ${({ xl }) => (100 * (xl ? xl : 1)) / 24}%;
    max-width: ${({ xl }) => (100 * (xl ? xl : 1)) / 24}%;
  }
  @media screen and (min-width: 1600px) {
    ${({ xxl = 1 }) => (xxl ? (xxl > 0 ? block : none) : none)};
    flex: 0 0 ${({ xxl }) => (100 * (xxl ? xxl : 1)) / 24}%;
    max-width: ${({ xxl }) => (100 * (xxl ? xxl : 1)) / 24}%;
  }
`;

export default styled.div`
  ${({ span }) => span && colSpan}
  ${({ span }) => !span && mediaColSpan}
  ${defaultMargin}
`;
