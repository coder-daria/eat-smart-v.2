import styled from "styled-components";

export const Path = styled.path`
  stroke: none;
`;

export const SVG = styled.svg`
  fill: ${({ fill }) => fill};
  min-height: ${({ width }) => `${width}px`};
  min-width: ${({ height }) => `${height}px`};
`;
