import styled from 'styled-components';

export const Grid = styled.div<{ align?: string; spacing?: number }>`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: ${({ spacing }) => spacing || 0}px;
  ${({ align }) => (align ? `align-content: ${align};` : '')}
`;

export const GridItem = styled.div<{ xs?: number; sm?: number; md?: number; lg?: number; xl?: number; justify?: string; align?: string }>`
  @media only screen and (min-width: 1200px) {
    grid-column: ${({ xs, sm, lg, md, xl }) => `span ${xl || lg || md || sm || xs || 12}`};
  }
  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    grid-column: ${({ xs, sm, lg, md }) => `span ${lg || md || sm || xs || 12}`};
  }
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    grid-column: ${({ xs, sm, md }) => `span ${md || sm || xs || 12}`};
  }
  @media only screen and (min-width: 600px) and (max-width: 768px) {
    grid-column: ${({ xs, sm }) => `span ${sm || xs || 12}`};
  }
  @media only screen and (max-width: 600px) {
    grid-column: ${({ xs }) => `span ${xs || 12}`};
  }
  ${({ justify }) => (justify ? `justify-self: ${justify};` : '')}
  ${({ align }) => (align ? `align-self: ${align};` : '')}
`;

export default Grid;
