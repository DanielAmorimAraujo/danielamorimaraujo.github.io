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
  const [touch, setTouch] = useState<{ x: number; y: number }>();

  const viewProfile = () => {
    setView({ curr: "profile", prev: view.curr });
  };

  const viewAbout = () => {
    setView({ curr: "about", prev: view.curr });
  };

  const viewResume = () => {
    setView({ curr: "resume", prev: view.curr });
  };

  window.ontouchstart = (e: TouchEvent) => {
    setTouch(
      e.touches.length === 1
        ? { x: e.touches[0].clientX, y: e.touches[0].clientY }
        : undefined
    );
  };

  window.ontouchend = (e: TouchEvent) => {
    if (!touch || e.changedTouches.length > 1) return;

    const dX = e.changedTouches[0].clientX - touch.x;
    const dY = e.changedTouches[0].clientY - touch.y;

    if (Math.abs(dX) < 50 && Math.abs(dY) < 50) return;

    const vertical = Math.abs(dX) < Math.abs(dY);

    if (view.curr === "profile") {
      if (vertical && dY < 0) {
        viewAbout();
      } else if (!vertical && dX < 0) {
        viewResume();
      }
    } else if (
      (view.curr === "about" && vertical && dY > 0) ||
      (view.curr === "resume" && !vertical && dX > 0)
    ) {
      viewProfile();
    }
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
          <Profile />
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
