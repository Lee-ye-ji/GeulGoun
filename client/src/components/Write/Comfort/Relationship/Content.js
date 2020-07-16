import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import Content1 from './image/Content1.jpg';
import Content2 from './image/Content2.jpg';
import Content3 from './image/Content3.jpg';
import Content4 from './image/Content4.jpg';
import Content5 from './image/Content5.jpg';
import Content6 from './image/Content6.jpg';
import Content7 from './image/Content7.jpg';
import Content8 from './image/Content8.jpg';
import Content9 from './image/Content9.jpg';
import Content10 from './image/Content10.jpg';
import Content11 from './image/Content11.jpg';
import Content12 from './image/Content12.jpg';

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
            <h2>인간관계에 지친 사람들을 위한 글</h2>
    </Link>

    <Grid>
        <Button variant="light" onClick={() => setShow1(true)}>
                <img src={Content1} alt="1" className="img"/>
        </Button>
        <Button variant="light" onClick={() => setShow2(true)}>
                <img src={Content2} alt="School2" className="img"/>
        </Button>
        <Button variant="light" onClick={() => setShow3(true)}>
                <img src={Content3} alt="School3" className="img"/>
        </Button>
        <Button variant="light" onClick={() => setShow4(true)}>
                <img src={Content4} alt="School4" className="img"/>
        </Button>
        <Button variant="light" onClick={() => setShow5(true)}>
                <img src={Content5} alt="School5" className="img"/>
        </Button>
        <Button variant="light" onClick={() => setShow6(true)}>
                <img src={Content6} alt="School6" className="img"/>
        </Button>
    </Grid>

    <Grid>
        <Button variant="light" onClick={() => setShow7(true)}>
                <img src={Content7} alt="School7" className="img"/>
        </Button>
        <Button variant="light" onClick={() => setShow8(true)}>
                <img src={Content8} alt="School8" className="img"/>
        </Button>
        <Button variant="light" onClick={() => setShow9(true)}>
                <img src={Content9} alt="School9" className="img"/>
        </Button>
        <Button variant="light" onClick={() => setShow10(true)}>
                <img src={Content10} alt="School10" className="img"/>
        </Button>
        <Button variant="light" onClick={() => setShow11(true)}>
                <img src={Content11} alt="School11" className="img"/>
        </Button>
        <Button variant="light" onClick={() => setShow12(true)}>
                <img src={Content12} alt="School12" className="img"/>
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
            <img src={Content1} alt="Content1"/>
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
            <img src={Content2} alt="Content2"/>
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
            <img src={Content3} alt="Content3"/>
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
            <img src={Content4} alt="Content4"/>
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
            <img src={Content5} alt="Content5"/>
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
            <img src={Content6} alt="Content6"/>
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
            <img src={Content7} alt="Content7"/>
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
            <img src={Content8} alt="Content8"/>
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
            <img src={Content9} alt="Content9"/>
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
            <img src={Content10} alt="Content10"/>
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
            <img src={Content11} alt="Content11"/>
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
            <img src={Content12} alt="Content12"/>
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