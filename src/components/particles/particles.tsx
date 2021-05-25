import React from "react";
import ParticlesJS from "react-particles-js";

import { globalColors } from "library/styles";

const Particles = (): React.ReactElement => (
  <ParticlesJS
    height="100%"
    params={{
      particles: {
        color: {
          value: globalColors.text,
        },
        number: {
          value: window.innerWidth * 0.1,
        },
        size: {
          value: 2,
          random: true,
        },
        move: {
          enable: true,
          direction: "none",
          random: true,
          speed: 0.25,
          straight: false,
        },
        opacity: {
          value: 0.35,
          random: true,
        },
      },
    }}
    style={{ position: "absolute", zIndex: -1 }}
  />
);

export default Particles;
