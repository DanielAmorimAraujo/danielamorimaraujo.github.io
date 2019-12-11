import React, { useState } from 'react';
import './App.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import ProfilePic from './profile-pic.png'

import Projects from './Projects';

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
          <a href={link} className={className} target="_blank" />
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
          <Image src={ProfilePic} id="profile-pic" className="float-right" />
        </Col>
        <Col id="profile">
          <p>hi,<br />
            I'm <span id="name">daniel araujo</span>
          </p>
          <Row id="icons">
            <ProfileIcon name="Resume" className="far fa-file" />
            <ProfileIcon name="GitHub" className="fab fa-github" link="https://github.com/DanielAmorimAraujo" />
            <ProfileIcon name="LinkedIn" className="fab fa-linkedin" link="https://linkedin.com/in/danielaraujoo" />
            <ProfileIcon name="Email" className="far fa-envelope" link="mailto:daniel.amorim.araujo@gmail.com" />
          </Row>
        </Col>
      </Row>
    </>
  );
}

const Intro = () => {
  return (
    <p id="intro">
      I am a Computer Science student attending the University of Waterloo. This is my personal website, where I'll have projects and other stuff about me, so enjoy your time here. Make sure to check out my <a class="text-link">Resume</a> and <a class="text-link" href="https://linkedin.com/in/danielaraujoo" target="_blank">LinkedIn</a>, or feel free to contact me through <a class="text-link" href="mailto:daniel.amorim.araujo@gmail.com" target="_blank">email</a>.
    </p>
  )
}

const App = () => {
  return (
    <>
      <main role="main">
        <Profile />
        <Intro />
        <Projects />
      </main>
    </>
  );
}

export default App;
