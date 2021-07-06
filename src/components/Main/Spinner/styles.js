import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`
export const CircleSpinner = styled.div`
  border: 20px solid transparent;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border-left-color: rgba(51, 17, 17, 1);
  animation: ${rotate} 1s ease infinite;

  position: relative;
  top: 35%;
  left: 40%;
`
export const SpinnerContainer = styled.div`
  background: rgba(0,0,0,.5);
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index:100;
  top: 0;
  left: 0;
  overflow-x: hidden;
`
