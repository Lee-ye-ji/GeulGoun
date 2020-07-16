import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import { Link, Grid } from '@material-ui/core';
import Slider from "react-slick";
import Dslider from './Dslider';
// import 'bootstrap/dist/css/bootstrap.min.css';

import D1 from './1.jpg'
import D2 from './2.jpg'

function DestinyButton() {
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);

    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
    <>
        <div className="container">
            <style>{cssstyle}</style>
            <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
			<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            <Link to="/Love">
                <h2>인연</h2>
            </Link>
        
        <Grid>
        <button variant="primary" onClick={() => setShow1(true)}>
            1
            <img src={D2} alt="D2"/>
        </button>
        <button variant="primary" onClick={() => setShow(true)}>
            2
        </button>
        <button variant="primary" onClick={() => setShow(true)}>
            3
        </button>
        <button variant="primary" onClick={() => setShow(true)}>
            4
        </button>
        </Grid>

        <Grid>
        <button variant="primary" onClick={() => setShow1(true)}>
            1
            <img src={D2} alt="D2"/>
        </button>
        <button variant="primary" onClick={() => setShow(true)}>
            2
        </button>
        <button variant="primary" onClick={() => setShow(true)}>
            3
        </button>
        <button variant="primary" onClick={() => setShow(true)}>
            4
        </button>
        </Grid>

        <Grid>
        <button variant="primary" onClick={() => setShow1(true)}>
            1
            <img src={D2} alt="D2"/>
        </button>
        <button variant="primary" onClick={() => setShow(true)}>
            2
        </button>
        <button variant="primary" onClick={() => setShow(true)}>
            3
        </button>
        <button variant="primary" onClick={() => setShow(true)}>
            4
        </button>
        </Grid>


        {/* button 1 */}
        <Modal className="Modal"
        show={show1}
        onHide={() => setShow1(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        >
        <Modal.Header closeButton className="close">
            <Modal.Title id="example-custom-modal-styling-title">
            안녕하세욥
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="slider">
            <Slider settings={settings}>
                        <div className="img">
                            <img src={D1} alt="D1"/>
                        </div>
                        <div>
                            <img src={D2} alt="D2"/>
                        </div>
            </Slider>
        </div>

        </Modal.Body>
        </Modal>

        {/* button 2 */}
        <Modal className="Modal"
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        >
        <Modal.Header closeButton className="close">
            <Modal.Title id="example-custom-modal-styling-title">
            안녕하세욥
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Dslider></Dslider>
        </Modal.Body>
        </Modal>
    </div>
    </>
    );
}

// render(<DestinyButton />);
export default DestinyButton;

const cssstyle = `
h2{
    margin-top: 13%;
    text-align: center;
    background-color: rgba(247, 173, 173, 0.822);
}
img{
    width:20%;
    height:20%;
}
button{
    width:20%;
    height:20%;
}
.close{
    width:30%;
}
.slider{
    margin: 10% auto;
    width: 80%;
}
.slick-next:before, .slick-prev:before {
    color: #000;
}

`