import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import School1 from './image/school1.jpg';
import School2 from './image/school2.jpg';
import School3 from './image/school3.jpg';
import School4 from './image/school4.jpg';
import School5 from './image/school5.jpg';
import School6 from './image/school6.jpg';
import School7 from './image/school7.jpg';
import School8 from './image/school8.jpg';
import School9 from './image/school9.jpg';
import School10 from './image/school10.jpg';
import School11 from './image/school11.jpg';
import school12 from './image/school12.jpg';

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
    <Link to="/Happy">
            <h2>대학생을 위한 글</h2>
    </Link>
    {/* <h3>클릭하면 자세히 볼 수 있습니다.</h3> */}

    <Grid>
        <Button variant="light" onClick={() => setShow1(true)}>
                <img src={School1} alt="School1" className="img"/>
        </Button>
        <Button variant="light" onClick={() => setShow2(true)}>
                <img src={School2} alt="School2" className="img"/>
        </Button>
        <Button variant="light" onClick={() => setShow3(true)}>
                <img src={School3} alt="School3" className="img"/>
        </Button>
        <Button variant="light" onClick={() => setShow4(true)}>
                <img src={School4} alt="School4" className="img"/>
        </Button>
        <Button variant="light" onClick={() => setShow5(true)}>
                <img src={School5} alt="School5" className="img"/>
        </Button>
        <Button variant="light" onClick={() => setShow6(true)}>
                <img src={School6} alt="School6" className="img"/>
        </Button>
    </Grid>

    <Grid>
        <Button variant="light" onClick={() => setShow7(true)}>
                <img src={School7} alt="School7" className="img"/>
        </Button>
        <Button variant="light" onClick={() => setShow8(true)}>
                <img src={School8} alt="School8" className="img"/>
        </Button>
        <Button variant="light" onClick={() => setShow9(true)}>
                <img src={School9} alt="School9" className="img"/>
        </Button>
        <Button variant="light" onClick={() => setShow10(true)}>
                <img src={School10} alt="School10" className="img"/>
        </Button>
        <Button variant="light" onClick={() => setShow11(true)}>
                <img src={School11} alt="School11" className="img"/>
        </Button>
        <Button variant="light" onClick={() => setShow12(true)}>
                <img src={school12} alt="School12" className="img"/>
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
            <img src={School1} alt="School1"/>
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
            <img src={School2} alt="School2"/>
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
            <img src={School3} alt="School1"/>
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
            <img src={School4} alt="School1"/>
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
            <img src={School5} alt="School1"/>
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
            <img src={School6} alt="School1"/>
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
            <img src={School7} alt="School1"/>
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
            <img src={School8} alt="School1"/>
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
            <img src={School9} alt="School1"/>
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
            <img src={School10} alt="School1"/>
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
            <img src={School11} alt="School11"/>
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
            <img src={school12} alt="School1"/>
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
img{
    width: 80%;
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