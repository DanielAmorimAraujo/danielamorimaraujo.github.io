import React from "react";
import Grid from "@material-ui/core/Grid";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import styled from "styled-components";

import Frame from "components/frame/frame";
import Waterloo from "assets/waterloo.png";
import Condos from "assets/condos.png";
import Enlighted from "assets/enlighted.png";
import Imagine from "assets/imagine.png";
import { LINKS } from "library/config";

const Centered = styled.div`
  text-align: center;
`;

const Gap = styled.div`
  height: 64px;
`;

const AboutMe = (): React.ReactElement => {
  const xs = useMediaQuery(useTheme().breakpoints.down("xs"));

  return (
    <Centered>
      <Grid container justify="center" spacing={2}>
        <Grid item xs={12} sm="auto">
          I’m a third-year student studying computer science at the
        </Grid>
        <Grid item>
          <div style={{ marginTop: xs ? "initial" : "-20px" }}>
            <Frame angle={6}>
              <img src={Waterloo} alt="University of Waterloo" width={128} />
            </Frame>
          </div>
        </Grid>
      </Grid>
      <Gap />
      {!xs && <Gap />}
      <Grid container justify="center" spacing={2}>
        <Grid item xs={12} sm="auto">
          I've worked at
        </Grid>
        <Grid item>
          <div style={{ marginTop: xs ? "initial" : "-32px" }}>
            <Frame variant="secondary" angle={-4}>
              <Grid container justify="space-evenly">
                <Grid item xs={4} sm={4}>
                  <img src={Condos} alt="Condos.ca" width={xs ? 96 : 128} />
                </Grid>
                <Grid item xs={4} sm={4} style={{ marginTop: "32px" }}>
                  <img
                    src={Enlighted}
                    alt="Enlighted Inc."
                    width={xs ? 96 : 128}
                  />
                </Grid>
                <Grid item xs={4} sm={4}>
                  <img
                    src={Imagine}
                    alt="Imagine Communications"
                    width={xs ? 96 : 128}
                  />
                </Grid>
              </Grid>
            </Frame>
          </div>
        </Grid>
      </Grid>
      <div style={{ marginTop: "48px" }}>
        doing mostly full-stack web development . However, I’m always looking
        for new opportunities and a chance to learn new skills, so feel free to
        reach out at {LINKS.email}.
      </div>
    </Centered>
  );
};

export default AboutMe;
