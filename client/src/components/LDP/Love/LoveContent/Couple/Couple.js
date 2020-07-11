import React, {Component} from 'react';
import './Couple.css';
import Logo from '../../../../main/Logo/Logo';
import CHM from './CHM/CHM';
import SimpleSlider from './Slider/Slider';

class Couple extends Component {
render(){
    return(
    <div class="Couple">
        <Logo></Logo>
        <CHM></CHM>
        {/* <SSlider></SSlider> */}
        <SimpleSlider></SimpleSlider>
        
        
    </div>
    );
}

}

export default Couple;