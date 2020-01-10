import React from 'react';
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
      <Row id="profile">
        <Col xs="12" sm="4">
          <Image src={ProfilePic} id="profile-pic" />
        </Col>
        <Col id="profile-info">
          <p>hi,<br />
            I'm <span id="name">daniel araujo</span>
          </p>
          <Row id="icons" noGutters>
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
      I am a second-year Computer Science student attending the University of Waterloo, who is passionate about all things coding and loves solving difficult problems. This is my personal website, where I'll have projects and other stuff about me, so enjoy your time here. For a more professional and in-depth evaluation, make sure to check out my <a class="text-link">Resume</a> and <a class="text-link" href="https://linkedin.com/in/danielaraujoo" target="_blank">LinkedIn</a>. Also, feel free to contact me via <a class="text-link" href="mailto:daniel.amorim.araujo@gmail.com" target="_blank">email</a>.
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
