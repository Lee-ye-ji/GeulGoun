import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import Dream1 from './image/Dream1.jpg';
import Dream2 from './image/Dream2.jpg';
import Dream3 from './image/Dream3.jpg';
import Dream4 from './image/Dream4.jpg';
import Dream5 from './image/Dream5.jpg';
import Dream6 from './image/Dream6.jpg';
import Dream7 from './image/Dream7.jpg';
import Dream8 from './image/Dream8.jpg';
import Dream9 from './image/Dream9.jpg';
import Dream10 from './image/Dream10.jpg';
import Dream11 from './image/Dream11.jpg';
import Dream12 from './image/Dream12.jpg';

import { Grid } from '@material-ui/core';

function Content() {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);
    const [show7, setShow7] = useState(false);
    const [show8, setShow8] = useState(false);
    const [show9, setShow9] = useState(false);
    const [show10, setShow10] = useState(false);
    const [show11, setShow11] = useState(false);
    const [show12, setShow12] = useState(false);

    return (
    <>
    <div className= "Content">
    <style>{cssstyle}</style>
    <Link to="/Comfort">
            <h2>꿈을 꾸고 있는 사람들을 위한 글</h2>
    </Link>

    <Grid>
        <Button variant="light" onClick={() => setShow1(true)}>
                <img src={Dream1} alt="1" className="img"/>
        </Button>
        <Button variant="light" onClick={() => setShow2(true)}>
                <img src={Dream2} alt="School2" className="img"/>
        </Button>
        <Button variant="light" onClick={() => setShow3(true)}>
                <img src={Dream3} alt="School3" className="img"/>
        </Button>
        <Button variant="light" onClick={() => setShow4(true)}>
                <img src={Dream4} alt="School4" className="img"/>
        </Button>
        <Button variant="light" onClick={() => setShow5(true)}>
                <img src={Dream5} alt="School5" className="img"/>
        </Button>
        <Button variant="light" onClick={() => setShow6(true)}>
                <img src={Dream6} alt="School6" className="img"/>
        </Button>
    </Grid>

    <Grid>
        <Button variant="light" onClick={() => setShow7(true)}>
                <img src={Dream7} alt="School7" className="img"/>
        </Button>
        <Button variant="light" onClick={() => setShow8(true)}>
                <img src={Dream8} alt="School8" className="img"/>
        </Button>
        <Button variant="light" onClick={() => setShow9(true)}>
                <img src={Dream9} alt="School9" className="img"/>
        </Button>
        <Button variant="light" onClick={() => setShow10(true)}>
                <img src={Dream10} alt="School10" className="img"/>
        </Button>
        <Button variant="light" onClick={() => setShow11(true)}>
                <img src={Dream11} alt="School11" className="img"/>
        </Button>
        <Button variant="light" onClick={() => setShow12(true)}>
                <img src={Dream12} alt="School12" className="img"/>
        </Button>
    </Grid>

        <Modal
            size="lg"
            className="modal"
            show={show1}
            onHide={() => setShow1(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
        >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            <img src={Dream1} alt="Dream1"/>
        </Modal.Body>
        </Modal>
        
        <Modal
            size="lg"
            className="modal"
            show={show2}
            onHide={() => setShow2(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
        >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            <img src={Dream2} alt="Dream2"/>
        </Modal.Body>
        </Modal>

        <Modal
            size="lg"
            className="modal"
            show={show3}
            onHide={() => setShow3(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
        >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            <img src={Dream3} alt="Dream3"/>
        </Modal.Body>
        </Modal>

        <Modal
            size="lg"
            className="modal"
            show={show4}
            onHide={() => setShow4(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
        >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            <img src={Dream4} alt="Dream4"/>
        </Modal.Body>
        </Modal>

        <Modal
            size="lg"
            className="modal"
            show={show5}
            onHide={() => setShow5(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
        >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            <img src={Dream5} alt="Dream5"/>
        </Modal.Body>
        </Modal>

        <Modal
            size="lg"
            className="modal"
            show={show6}
            onHide={() => setShow6(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
        >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            <img src={Dream6} alt="Dream6"/>
        </Modal.Body>
        </Modal>
        
        <Modal
            size="lg"
            className="modal"
            show={show7}
            onHide={() => setShow7(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
        >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            <img src={Dream7} alt="Dream7"/>
        </Modal.Body>
        </Modal>

        <Modal
            size="lg"
            className="modal"
            show={show8}
            onHide={() => setShow8(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
        >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            <img src={Dream8} alt="Dream8"/>
        </Modal.Body>
        </Modal>

        <Modal
            size="lg"
            className="modal"
            show={show9}
            onHide={() => setShow9(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
        >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            <img src={Dream9} alt="Dream9"/>
        </Modal.Body>
        </Modal>

        <Modal
            size="lg"
            className="modal"
            show={show10}
            onHide={() => setShow10(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
        >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            <img src={Dream10} alt="Dream10"/>
        </Modal.Body>
        </Modal>

        <Modal
            size="lg"
            className="modal"
            show={show11}
            onHide={() => setShow11(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
        >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            <img src={Dream11} alt="Dream11"/>
        </Modal.Body>
        </Modal>

        <Modal
            size="lg"
            className="modal"
            show={show12}
            onHide={() => setShow12(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
        >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            <img src={Dream12} alt="Dream12"/>
        </Modal.Body>
        </Modal>


    </div>
    </>
    );
}

// render(<Example />);
export default Content;

const cssstyle = `
.Content{
    margin-top: -9%;
}
.img{
    width:80%;
    height:80%;
}
img{
    width:80%;
    height:80%;
}
Button{
    width:15%;
    background-color:white;
}
Modal.Body{
    width:30%;
    height:30%;
}
h2{
    font-family: 'Noto Serif KR', serif;
    color: black;
    margin-top: 10%;
    text-align: center;
    background-color: rgba(247, 173, 173, 0.822);
    font-size: 25px;
    padding: 10px;
}
`