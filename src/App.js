import React, { useState } from 'react';
import './App.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import ProfilePic from './profile-pic.png'


const ProfileIcon = ({ name, className, link }) => {
  return (
    <Col xs="1">
      <span className="individual-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={
            <Tooltip>
              {name}
            </Tooltip>
          }
        >
          <a href={link} className={className} />
        </OverlayTrigger>
      </span>
    </Col>

  );
}

const Profile = () => {
  return (
    <>
      <Row>
        <Col xs="4">
          <Image src={ProfilePic} className="float-right" />
        </Col>
        <Col id="profile">
          <p>hi,<br />
            I'm <span id="name">daniel araujo</span>
          </p>
          <Row id="icons">
            <ProfileIcon name="Resume" className="far fa-file" />
            <ProfileIcon name="Github" className="fab fa-github" />
            <ProfileIcon name="LinkedIn" className="fab fa-linkedin" />
            <ProfileIcon name="Email" className="far fa-envelope" />
          </Row>
        </Col>
      </Row>
    </>
  );
}

const Intro = () => {
  return (
    <p id="intro">
      Hi, I'm a student at the University of Waterloo studying in the Computer Science Co-op program. This is my personal website, where I'll have projects, awards, and other stuff about me. Check out the links above for my resume, LinkedIn profile, GitHub account, or to contact me via Email
    </p>
  )
}

const App = () => {
  return (
    <>
      <main role="main">
        <Profile />
        <Intro />
      </main>
    </>
  );
}

export default App;
