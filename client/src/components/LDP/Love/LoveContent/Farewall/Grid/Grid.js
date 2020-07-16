import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function Grid() {
    const [show, setShow] = useState(false);

    return (
    <>
        <Button variant="primary" onClick={() => setShow(true)}>
            Custom Width Modal
        </Button>

        <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
        >
        <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
                이별1
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
        </Modal.Body>
        </Modal>
    </>
    );
}

// render(<Example />);
export default Grid;