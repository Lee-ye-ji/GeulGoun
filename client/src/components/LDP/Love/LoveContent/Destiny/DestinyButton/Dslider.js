import React, { Component } from 'react';
import Slider from "react-slick";
import D1 from './1.jpg'
import D2 from './2.jpg'

export default class DSlider extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1
        };
		return (
        <div className="slider">
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
				<style>{cssstyle}</style>
            <Slider settings={settings}>
                        <div className="img">
                            <img src={D1} alt="D1"/>
                        </div>
                        <div>
                            <img src={D2} alt="D2"/>
                        </div>
            </Slider>
        </div>
		);
	}
}

const cssstyle = `
.slider{
margin: 10% auto;
width: 80%;
}
.slick-next:before, .slick-prev:before {
    color: #000;
}
`