import React from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";

import Frame from "components/frame/frame";
import Waterloo from "assets/waterloo.png";
import Condos from "assets/condos.png";
import Enlighted from "assets/enlighted.png";
import Imagine from "assets/imagine.png";

const Centered = styled.div`
  text-align: center;
`;

const Gap = styled.div`
  height: 64px;
`;

const AboutMe = (): React.ReactElement => (
  <Centered>
    <Grid
      container
      justify="center"
      spacing={2}
      style={{ marginLeft: "-80px" }}
    >
      <Grid item>
        I’m a third-year student studying computer science at the
      </Grid>
      <Grid item>
        <div style={{ marginTop: "-20px" }}>
          <Frame width={160} height={60} angle={10} />
          <img
            src={Waterloo}
            alt="University of Waterloo"
            width={160}
            style={{ position: "absolute" }}
          />
        </div>
      </Grid>
    </Grid>
    <Gap />
    <Gap />
    <Grid
      container
      justify="center"
      spacing={2}
      style={{ marginLeft: "-224px" }}
    >
      <Grid item>I've worked at</Grid>
      <Grid item>
        <div style={{ position: "relative", marginTop: "-32px" }}>
          <Frame variant="secondary" width={448} height={96} angle={-4} />
          <img
            src={Condos}
            alt="Condos.ca"
            width={128}
            style={{ position: "absolute", top: "16px", left: "16px" }}
          />
          <img
            src={Enlighted}
            alt="Enlighted Inc."
            width={128}
            style={{ position: "absolute", top: "48px", left: "160px" }}
          />
          <img
            src={Imagine}
            alt="Imagine Communications"
            width={128}
            style={{ position: "absolute", top: "20px", left: "304px" }}
          />
        </div>
      </Grid>
    </Grid>
    <Gap />
    <Centered>
      doing mostly web development, both front-end and back-end. However, I’m
      always looking for new opportunities and a chance to learn new skills, so
      feel free to reach out at me@danielaraujo.dev
    </Centered>
  </Centered>
);

export default AboutMe;
