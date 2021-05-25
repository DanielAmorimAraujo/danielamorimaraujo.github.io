import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Slide from "@material-ui/core/Slide";
import Fade from "@material-ui/core/Fade";
import styled from "styled-components";
import ArrowLeftCircleOutlineIcon from "mdi-react/ArrowLeftCircleOutlineIcon";
import ArrowLeftCircleIcon from "mdi-react/ArrowLeftCircleIcon";

import Profile from "components/profile/profile";
import Resume from "components/resume/resume";
import AboutMe from "components/about-me/about-me";
import Socials from "components/socials/socials";
import ProfilePicture from "assets/profile-picture.png";

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
  const [viewInfo, setViewInfo] = useState<{ curr: TView; prev: TView }>({
    curr: "profile",
    prev: "profile",
  });
  const [touch, setTouch] = useState<{ x: number; y: number }>();
  const [backHover, setBackHover] = useState(false);

  const is = (name: TView) => viewInfo.curr === name;
  const was = (name: TView) => viewInfo.prev === name;
  const view = (name: TView) => {
    setViewInfo({ curr: name, prev: viewInfo.curr });
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

    if (is("profile")) {
      if (vertical && dY < 0) {
        view("about");
      } else if (!vertical && dX < 0) {
        view("resume");
      }
    } else if (
      (is("about") && vertical && dY > 0) ||
      (is("resume") && !vertical && dX > 0)
    ) {
      view("profile");
    }
  };

  window.onwheel = (e: WheelEvent) => {
    if (is("profile")) {
      if (e.deltaY > 0) {
        view("about");
      } else if (e.deltaX > 0) {
        view("resume");
      }
    } else if (
      (is("about") && e.deltaY < 0) ||
      (is("resume") && e.deltaX < 0)
    ) {
      view("profile");
    }
  };

  return (
    <>
      <MainWrap
        container
        justify="center"
        alignItems="center"
        style={{ height: window.innerHeight + "px" }}
      >
        <Slide
          direction={is("resume") || was("resume") ? "right" : "down"}
          in={is("profile")}
          timeout={500}
        >
          <SubWrap item>
            <Profile
              onResumeClick={() => {
                view("resume");
              }}
            />
          </SubWrap>
        </Slide>
        <Slide direction="up" in={is("about")} timeout={500}>
          <SubWrap item>
            <AboutMe />
          </SubWrap>
        </Slide>
        <Slide direction="left" in={is("resume")} timeout={500}>
          <Grid item>
            <Resume />
          </Grid>
        </Slide>
      </MainWrap>
      <Fade
        in={is("resume")}
        style={{
          position: "fixed",
          top: "8px",
          left: "8px",
          cursor: "pointer",
        }}
      >
        {backHover ? (
          <ArrowLeftCircleIcon
            onClick={() => {
              view(viewInfo.prev);
              setBackHover(false);
            }}
            onMouseLeave={() => {
              setBackHover(false);
            }}
          />
        ) : (
          <ArrowLeftCircleOutlineIcon
            onClick={() => {
              view(viewInfo.prev);
              setBackHover(false);
            }}
            onMouseEnter={() => {
              setBackHover(true);
            }}
          />
        )}
      </Fade>
    </>
  );
};

export default Main;
