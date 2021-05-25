import React from "react";
import styled from "styled-components";

import { globalColors } from "library/styles";

interface IFrame {
  width?: number;
  height?: number;
  angle?: number;
  variant?: "primary" | "secondary";
  children?: React.ReactElement;
}

interface IRectangle {
  color: string;
  width: string;
  height: string;
  angle: number;
}

const Rectangle = styled.div<IRectangle>`
  background-color: ${(props) => props.color};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  transform: rotate(${(props) => props.angle}deg);
`;

const RectangleFront = styled(Rectangle)`
  position: absolute;
`;

const ChildrenWrap = styled.div<{ angle: number }>`
  padding: 16px;
  transform: rotate(${(props) => props.angle}deg);
`;

const Frame = ({
  width,
  height,
  angle,
  variant,
  children,
}: IFrame): React.ReactElement => (
  <>
    <Rectangle
      color={
        !variant || variant === "primary" ? globalColors.blue : globalColors.red
      }
      width={width ? width + "px" : "auto"}
      height={height ? height + "px" : "auto"}
      angle={angle || 10}
    >
      <RectangleFront
        color={
          !variant || variant === "primary"
            ? globalColors.green
            : globalColors.pink
        }
        width={width ? width + "px" : "100%"}
        height={height ? height + "px" : "100%"}
        angle={angle ? -angle : -10}
      />
      <ChildrenWrap angle={angle ? -angle : -10}>{children}</ChildrenWrap>
    </Rectangle>
  </>
);

export default Frame;
