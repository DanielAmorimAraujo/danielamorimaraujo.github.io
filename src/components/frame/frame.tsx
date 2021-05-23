import React from "react";
import styled from "styled-components";

import { globalColors } from "library/styles";

interface IFrame {
  width: number;
  height: number;
  angle?: number;
  variant?: "primary" | "secondary";
}

interface IRectangle {
  color: string;
  width: number;
  height: number;
  angle: number;
}

const Rectangle = styled.div<IRectangle>`
  position: absolute;
  background-color: ${(props) => props.color};
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  transform: rotate(${(props) => props.angle}deg);
`;

const Frame = ({
  width,
  height,
  angle,
  variant,
}: IFrame): React.ReactElement => (
  <>
    <Rectangle
      color={
        !variant || variant === "primary" ? globalColors.blue : globalColors.red
      }
      width={width}
      height={height}
      angle={angle || 10}
    />
    <Rectangle
      color={
        !variant || variant === "primary"
          ? globalColors.green
          : globalColors.pink
      }
      width={width}
      height={height}
      angle={0}
    />
  </>
);

export default Frame;
