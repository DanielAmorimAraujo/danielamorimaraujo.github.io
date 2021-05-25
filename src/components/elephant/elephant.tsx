import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styled, { keyframes } from "styled-components";

import ElephantGif from "assets/elephant.gif";
import ElephantGif90 from "assets/elephant-90.gif";

const ELEPHANT_COUNT = 21;

const useStyles = makeStyles({
  elephant: {
    width: "42px",
    position: "fixed",
    zIndex: -1,
  },
  elephantRight: {
    left: "-50px",
    animation: "$moveRight 25s linear",
  },
  elephantLeft: {
    right: "-50px",
    transform: "scaleX(-1)",
    animation: "$moveLeft 25s linear",
  },
  "@keyframes moveRight": {
    from: { left: "-50px" },
    to: { left: "100%" },
  },
  "@keyframes moveLeft": {
    from: { right: "-50px" },
    to: { right: "100%" },
  },
});

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

const Elephant = (): React.ReactElement => {
  const classes = useStyles();

  const generateElephants = () => {
    const root = document.getElementById("root");
    const height = document.body.clientHeight - 50;

    for (let i = 0; i < ELEPHANT_COUNT; ++i) {
      const top = Math.floor(Math.random() * height);
      const elephant = document.createElement("img");
      elephant.style.cssText = `top: ${top}px`;
      elephant.src = ElephantGif;
      elephant.classList.add(classes.elephant);
      if (Math.random() < 0.5) {
        elephant.classList.add(classes.elephantLeft);
      } else {
        elephant.classList.add(classes.elephantRight);
      }

      setTimeout(() => {
        root?.append(elephant);
        setTimeout(() => {
          root?.removeChild(elephant);
        }, 25000);
      }, 1000 * i);
    }
  };

  return (
    <>
      <ElephantWrapper>
        <ElephantImage
          src={ElephantGif90}
          alt="elephant"
          onClick={generateElephants}
        />
      </ElephantWrapper>
    </>
  );
};

export default Elephant;
