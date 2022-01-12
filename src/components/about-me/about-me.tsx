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
import Persona from "assets/persona.png";
import { LINKS, WORK_LINKS } from "library/config";

const Centered = styled.div`
  text-align: center;
`;

const Gap = styled.div`
  height: 64px;
`;

interface IWorkGrid {
  src: string;
  alt: string;
  link: string;
  width?: number;
  style: React.CSSProperties;
}

const WorkGrid = ({ src, alt, link, width = 112, style = {} }: IWorkGrid) => {
  return (
    <Grid item xs={12} sm={3} style={style}>
      <img
        src={src}
        alt={alt}
        width={width}
        onClick={() => {
          window.open(link);
        }}
        style={{ cursor: "pointer" }}
      />
    </Grid>
  );
};

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
              <Grid
                container
                justify="space-evenly"
                spacing={2}
                style={xs ? { maxWidth: "384px" } : {}}
              >
                <WorkGrid
                  src={Persona}
                  alt="Persona Identities"
                  link={WORK_LINKS.persona}
                  style={xs ? { marginTop: "8px", marginLeft: "-32px" } : {}}
                />
                <WorkGrid
                  src={Condos}
                  alt="Condos.ca"
                  link={WORK_LINKS.condos}
                  style={
                    xs
                      ? { marginLeft: "-192px" }
                      : { marginTop: "32px", marginLeft: "-32px" }
                  }
                />
                <WorkGrid
                  src={Enlighted}
                  alt="Enlighted Inc."
                  link={WORK_LINKS.enlighted}
                  style={
                    xs
                      ? { marginTop: "-32px", marginLeft: "128px" }
                      : { marginTop: "8px", marginLeft: "-16px" }
                  }
                />
                <WorkGrid
                  src={Imagine}
                  alt="Imagine Communications"
                  link={WORK_LINKS.imagine}
                  width={96}
                  style={xs ? { marginLeft: "32px" } : { marginTop: "24px" }}
                />
              </Grid>
            </Frame>
          </div>
        </Grid>
      </Grid>
      <div style={{ marginTop: "48px" }}>
        doing mostly full-stack web development . However, I’m always looking
        for new opportunities and a chance to learn new skills, so feel free to
        reach to {LINKS.email}.
      </div>
    </Centered>
  );
};

export default AboutMe;
