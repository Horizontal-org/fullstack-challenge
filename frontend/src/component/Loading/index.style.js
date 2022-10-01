import styled, { css, keyframes } from 'styled-components'

const rippleKeyFrame = keyframes`
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
`
const loadingCss = css`
  display: inline-block;
  position: fixed;
  width: 80px;
  height: 80px;
  top: 50%;
  @media screen and (min-width: 576px) {
    left: 45%;
  }
  left: 35%;
  div {
    position: absolute;
    border: 4px solid black;
    opacity: 1;
    border-radius: 50%;
    animation: ${rippleKeyFrame} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  div:nth-child(2) {
    animation-delay: -0.5s;
  }
`
export const Loading = styled.div`
  ${loadingCss}
`