import React from 'react';
import './App.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import Projects from './Projects';

import ProfilePicture from './assets/profile-picture-faded.png';

import ElephantWalking from './assets/elephant.gif';

const appendElephant = (i, height, main) => {
  const elephant = document.createElement('img');

  elephant.classList.add('elephant');
  if (i % 2 === 0) {
    elephant.classList.add('elephant-right');
  } else {
    elephant.classList.add('elephant-left');
  }
  elephant.src = ElephantWalking;
  const top = Math.floor((Math.random() * height));

  elephant.style.top = String(top) + "px";
  main.append(elephant)
  setTimeout(() => { main.removeChild(elephant) }, 15000);
}

const generateElephants = () => {
  const elephantCount = 21;
  const
    height = document.body.clientHeight,
    main = document.getElementById('main');

  for (let i = 0; i < elephantCount; ++i) {
    setTimeout(() => { appendElephant(i, height, main) }, 1000 * i);
  }
}

const ProfileIcon = ({ name, className, link }) => {
  return (
    <Col>
      <span className="individual-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={
            <Tooltip>
              {name}
            </Tooltip>
          }
        >
          <a href={link} className={className} target="_blank" rel="noopener noreferrer"><span></span></a>
        </OverlayTrigger>
      </span>
    </Col>

  );
}

const Profile = () => {
  return (
    <>
      <Row id="profile">
        <Col xs="12" sm="5">
          <Image src={ProfilePicture} id="profile-pic" />
          <div id="elephant-wrapper">
            <Image id="elephant" src={ElephantWalking} onClick={generateElephants} />
          </div>
        </Col>
        <Col xs="auto" sm="7" id="profile-info">
          <p>hi,<br />
            I'm <span id="name">daniel araujo</span>
          </p>
          <Row id="icons" noGutters>
            <ProfileIcon name="Resume" className="far fa-file" link="https://danielaraujo.dev/resume" />
            <ProfileIcon name="GitHub" className="fab fa-github" link="https://github.com/DanielAmorimAraujo" />
            <ProfileIcon name="LinkedIn" className="fab fa-linkedin" link="https://linkedin.com/in/DanielAmorimAraujo" />
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
      I am a second-year Computer Science student attending the University of Waterloo, who is passionate about all things
      coding and loves solving difficult problems. This is my personal website, where I'll have projects and other stuff
      about me, so enjoy your time here. For a more professional and in-depth evaluation, make sure to check out
      my <a className="text-link" href="https://danielaraujo.dev/resume" target="_blank" rel="noopener noreferrer">resume</a> and <a className="text-link" href="https://linkedin.com/in/DanielAmorimAraujo" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
      Also, feel free to contact me via <a className="text-link" href="mailto:daniel.amorim.araujo@gmail.com" target="_blank" rel="noopener noreferrer">email</a>.
    </p>
  )
}

const SiteBuilding = () => {
  return (
    <div id="site-building">
      <p>
        <span role="img" aria-label="construction sign">🚧</span>
        Site still under construction
        <span role="img" aria-label="construction sign">🚧</span>
        <br />
        <span style={{ color: 'grey' }}>(p.s. click on the elephant)</span>
      </p>
    </div>
  );
}

const App = () => {
  return (
    <main role="main" id="main">
      <Profile />
      <Intro />
      <Projects />
      <SiteBuilding />
    </main>
  );
}

export default App;
