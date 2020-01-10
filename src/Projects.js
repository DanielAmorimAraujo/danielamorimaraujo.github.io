import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

/* Project Images */
import Dropper from './assets/dropper.png';

const ProjectModal = ({ type, ...props }) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {type}
          <a
            href={
              type === 'Dropper' ? "https://github.com/DanielAmorimAraujo/Dropper-Game"
                : type === 'Roameo' ? "https://github.com/DanielAmorimAraujo/Travelbook"
                  : ""}
            className="fas fa-external-link-alt project-icon" target="_blank" />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {type === 'Dropper' && (
          <p>
            Dropper is a single-player game where the objective is to keep the red square on the screen by navigating through gaps in moving floors. Coins randomly generated around the screen can be collected along the way to add to your score.<br /><br />
            It was coded and designed in Java using Android Studio. The game constantly updates using a game thread while game objects are drawn using a canvas. The game is currently still under development as new features, bug fixes, and a redesign is being worked on.<br /><br />
            Future developmenets:
          <ul>
              <li>
                add power-ups
            </li>
              <li>
                add a shop
            </li>
              <li>
                redesign look
            </li>
            </ul>
          </p>
        )}
        {type === 'Roameo' && (
          <p>
            Roameo (previously named Travelbook), is a travel website used to allow multiple users to plan a trip at once. Using the Google Maps api, users are able to select a destination and add it to their calendar. It also hosts a Facebook Messenger bot (beta) to help users pick destinations.<br /><br />
            This projet was created during a hackathon using Javascript, HTML/CSS, and Firebase.<br /><br />
            Check out the <a className="text-link" href="https://danielaraujo.dev/Travelbook/" target="_blank">site</a>.<br /><br />
            Note: due to the Google Maps api key expiring and costing money, the site is currently disabled.
          </p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Project = ({ type }) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Card onClick={() => setModalShow(true)}>
        <div class="card-image-container">
          <Card.Img variant="top" src={Dropper} />
          <div class="caption">
            <p>Learn more</p>
          </div>
        </div>
        <Card.Footer>{type}</Card.Footer>
      </Card>

      <ProjectModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        type={type}
      />
    </>
  )
}


const Projects = () => {
  return (
    <>
      <h2>projects</h2>

      <CardColumns>
        <Project type="Dropper" />
        <Project type="Roameo" />
      </CardColumns>
    </>
  )
}

export default Projects;
