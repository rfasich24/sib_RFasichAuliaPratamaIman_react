import { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";

const MyNavButton = (props) => {
  const [nameState, setNameState] = useState(props.name);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  useEffect(() => {});
  let titleModal = nameState === "Login" ? "Logged out" : "Login";
  let changesName = () => {
    setShow(true);
    setNameState(nameState === "Login" ? "Logout" : "Login");
  };
  return (
    <>
      <Button variant="primary" onClick={changesName}>
        {nameState}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Alert</Modal.Title>
        </Modal.Header>
        <Modal.Body>Anda Berhasil {titleModal}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MyNavButton;
