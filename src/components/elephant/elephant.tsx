import React from "react";
import styled, { keyframes } from "styled-components";

import ElephantGif from "assets/elephant-90.gif";

const walk = keyframes`
  from { transform: rotate(0deg) translateX(142px) rotate(0deg); }
  to { transform: rotate(360deg) translateX(142px) rotate(-360deg); }
`;

const spin = keyframes`
  100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); }
`;

const ElephantWrapper = styled.div`
  height: 42px;
  position: absolute;
  top: 123px;
  left: 130px;
  cursor: pointer;
  animation: ${walk} 25s linear infinite;
`;

const ElephantImage = styled.img`
  height: inherit;
  animation: ${spin} 25s infinite linear;
`;

const Elephant = (): React.ReactElement => (
  <ElephantWrapper>
    <ElephantImage src={ElephantGif} alt="elephant" />
  </ElephantWrapper>
);

export default Elephant;
