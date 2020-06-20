import styled, { keyframes } from 'styled-components';
import Grid, {GridItem} from '../../../components/Grid';

const loading = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1
  }
`

export const Tile = styled(GridItem)<{tileImg: string}>`
  cursor: pointer;
  height: 320px; 
  background-image: ${({tileImg}) => `url(${tileImg})`};
  background-size: cover; 
  background-position: center center;
  &:hover {
    transition: 0.25s;
    z-index: 2;
    transform: scale(1.1);
  }
`

export const Cases = styled.div<{img: string}>`
  position: relative;
  animation-name: ${loading};
  animation-duration: 1.5s;
  animation-timing-function: ease;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background-image: ${({img}) => img};
  background-position: top center;
  background-size: 100%;
  background-repeat: no-repeat;
  z-index: 0;
`

export const ParallaxElement = styled(Cases)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;