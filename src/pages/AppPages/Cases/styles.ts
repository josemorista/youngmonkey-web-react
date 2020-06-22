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
  position: relative;
  background-image: ${({tileImg}) => `url(${tileImg})`};
  background-size: cover; 
  background-position: center center;
  &:hover {
    transition: 0.25s;
    z-index: 2;
    transform: scale(1.1);
  }
  @media only screen and (max-width: 600px) {
    height: 250px;
  };
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
  z-index: 0;
`;

export const Label = styled(Grid)`
  width: 100%;
  opacity: 0;
  background-color: rgba(255, 255, 255, 0.6);
  display: 'flex';
  justify-self: 'center';
  height: 100%;
  ${GridItem} {
    font-size: 20pt;
    font-family: 'Uni Sans';
    text-align: center;
    @media only screen and (max-width: 600px) {
      font-size: 15pt;
  };
  }
  &:hover {
    transition: 0.25s;
    opacity: 1;
  }
`

export const CasesTitle = styled(Grid)`
  text-align: center;
  color: white;
  font-size: 100pt;
  padding-top: 5%;
  @media only screen and (max-width: 600px) {
    font-size: 50pt;
  };
`