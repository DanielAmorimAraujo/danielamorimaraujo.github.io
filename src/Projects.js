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

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


const Projects = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <h2>projects</h2>

      <CardColumns>
        <Card onClick={() => setModalShow(true)}>
          <div class="card-image-container">
            <Card.Img variant="top" src={Dropper} />
            <div class="caption">
              <p>Learn more</p>
            </div>
          </div>
          <Card.Footer>Dropper</Card.Footer>
        </Card>
      </CardColumns>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  )
}

export default Projects;
