import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Slide from "@material-ui/core/Slide";
import styled from "styled-components";

import Profile from "components/profile/profile";
import Resume from "components/resume/resume";
import AboutMe from "components/about-me/about-me";

type TView = "profile" | "about" | "resume";

const MainWrap = styled(Grid)`
  margin: auto;
`;

const SubWrap = styled(Grid)`
  position: fixed;
  max-width: 800px;
  padding: 8px;
`;

const Main = (): React.ReactElement => {
  const [view, setView] = useState<{ curr: TView; prev: TView }>({
    curr: "profile",
    prev: "profile",
  });

  const viewProfile = () => {
    setView({ curr: "profile", prev: view.curr });
  };

  const viewAbout = () => {
    setView({ curr: "about", prev: view.curr });
  };

  const viewResume = () => {
    setView({ curr: "resume", prev: view.curr });
  };

  window.onwheel = (e: WheelEvent) => {
    if (view.curr === "profile") {
      if (e.deltaY > 0) {
        viewAbout();
      } else if (e.deltaX > 0) {
        viewResume();
      }
    } else if (
      (view.curr === "about" && e.deltaY < 0) ||
      (view.curr === "resume" && e.deltaX < 0)
    ) {
      viewProfile();
    }
  };

  return (
    <MainWrap
      container
      justify="center"
      alignItems="center"
      style={{ height: window.innerHeight + "px" }}
    >
      <Slide
        direction={
          view.curr === "resume" || view.prev === "resume" ? "right" : "down"
        }
        in={view.curr === "profile"}
        timeout={500}
      >
        <SubWrap item>
          <Profile onResumeClick={viewResume} />
        </SubWrap>
      </Slide>
      <Slide direction="up" in={view.curr === "about"} timeout={500}>
        <SubWrap item>
          <AboutMe />
        </SubWrap>
      </Slide>
      <Slide direction="left" in={view.curr === "resume"} timeout={500}>
        <Grid item>
          <Resume />
        </Grid>
      </Slide>
    </MainWrap>
  );
};

export default Main;
