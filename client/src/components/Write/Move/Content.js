import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import Love1 from './image/Love1.jpg';
import Love2 from './image/Love2.jpg';
import Love3 from './image/Love3.jpg';
import Love4 from './image/Love4.jpg';
import Love5 from './image/Love5.jpg';
import Love6 from './image/Love6.jpg';
import Love7 from './image/Love7.jpg';
import Love8 from './image/Love8.jpg';
import Love9 from './image/Love9.jpg';
import Love10 from './image/Love10.jpg';
import Love11 from './image/Love11.jpg';
import Love12 from './image/Love12.jpg';

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
    <Link to="/">
            <h2>사랑에 관련된 글</h2>
    </Link>
    {/* <h3>클릭하면 자세히 볼 수 있습니다.</h3> */}

    <Grid>
        <Button variant="light" onClick={() => setShow1(true)}>
                <img src={Love1} alt="Love1" className="img"/>
        </Button>
        <Button variant="light" onClick={() => setShow2(true)}>
                <img src={Love2} alt="Love2" className="img"/>
        </Button>
        <Button variant="light" onClick={() => setShow3(true)}>
                <img src={Love3} alt="Love3" className="img"/>
        </Button>
        <Button variant="light" onClick={() => setShow4(true)}>
                <img src={Love4} alt="Love4" className="img"/>
        </Button>
        <Button variant="light" onClick={() => setShow5(true)}>
                <img src={Love5} alt="Love5" className="img"/>
        </Button>
        <Button variant="light" onClick={() => setShow6(true)}>
                <img src={Love6} alt="Love6" className="img"/>
        </Button>
    </Grid>

    <Grid>
        <Button variant="light" onClick={() => setShow7(true)}>
                <img src={Love7} alt="Love7" className="img"/>
        </Button>
        <Button variant="light" onClick={() => setShow8(true)}>
                <img src={Love8} alt="Love8" className="img"/>
        </Button>
        <Button variant="light" onClick={() => setShow9(true)}>
                <img src={Love9} alt="Love9" className="img"/>
        </Button>
        <Button variant="light" onClick={() => setShow10(true)}>
                <img src={Love10} alt="Love10" className="img"/>
        </Button>
        <Button variant="light" onClick={() => setShow11(true)}>
                <img src={Love11} alt="Love11" className="img"/>
        </Button>
        <Button variant="light" onClick={() => setShow12(true)}>
                <img src={Love12} alt="Love12" className="img"/>
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
            <img src={Love1} alt="Love1"/>
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
            <img src={Love2} alt="Love2"/>
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
            <img src={Love3} alt="Love3"/>
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
            <img src={Love4} alt="Love4"/>
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
            <img src={Love5} alt="Love5"/>
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
            <img src={Love6} alt="Love6"/>
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
            <img src={Love7} alt="Love7"/>
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
            <img src={Love8} alt="Love8"/>
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
            <img src={Love9} alt="Love9"/>
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
            <img src={Love10} alt="Love10"/>
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
            <img src={Love11} alt="Love11"/>
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
            <img src={Love12} alt="Love12"/>
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