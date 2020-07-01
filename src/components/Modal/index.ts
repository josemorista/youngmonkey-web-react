import styled, { keyframes } from 'styled-components';

const Modal = styled.div`
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  * {
    animation-name: ${keyframes`
      0% {
        opacity: 0
      }
      100% {
        opacity: 1
      }
    `};
    animation-duration: 0.5s;
  }
  
`

export default Modal;