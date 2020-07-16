import React, {Component} from 'react';
import './Crush.css';
import Logo from '../../../../main/Logo/Logo';
import CHM from '../Couple/CHM/CHM';
import CG from './CG/CG';

class Crush extends Component {
render(){
    return(
    <div class="Crush">
        <Logo></Logo>
        <CHM></CHM>
        <CG></CG>
    </div>
    );
}

}

export default Crush;