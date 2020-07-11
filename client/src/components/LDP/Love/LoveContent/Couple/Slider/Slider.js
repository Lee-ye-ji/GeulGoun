import React, { Component } from 'react';
import Slider from "react-slick";
import pc1 from './gkrltlfgdj.jpg';
import cu1 from './couple1.png';
import cu2 from './lw.png';
import pc3 from './pc3.png';
import pc4 from './pc4.png';

export default class SimpleSlider extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1
        };
		return (
			<div className="container">
				<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
				<style>{cssstyle}</style>
				<h2> 인연</h2>
				<Slider {...settings}>
					<div className="img">
						<img src={cu1} alt="pc1"/>
					</div>
					<div>
						<img src={cu2} alt="pc2"/>
					</div>
					<div>
						<img src={pc3} alt="pc3"/>
					</div>
					<div>
						<img src={pc4} alt="pc4"/>
					</div>
					<div>
						<img src={pc1} alt="pc5"/>
					</div>
					<div>
						<img src={pc1} alt="pc6"/>
					</div>
				</Slider>
			</div>
		);
	}
}

const cssstyle = `
.container {
margin: 13% auto;
padding: 0px 40px 40px 40px;
width: 80%;

}
.slick-next:before, .slick-prev:before {
    color: #000;
}
h2{
    text-align: center;
    background-color: rgba(247, 173, 173, 0.822);
}
`