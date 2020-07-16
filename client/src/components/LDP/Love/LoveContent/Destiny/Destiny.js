import React, {Component} from 'react';
import './Destiny.css';
import Logo from '../../../../main/Logo/Logo';
// import { GridList } from '@material-ui/core';
import DestinyButton from './DestinyButton/DestinyButton';
import CHM from '../Couple/CHM/CHM';

class Destiny extends Component {
render(){
    return(
    <div class="Destiny">
    <Logo></Logo>
    <CHM></CHM>
    <DestinyButton></DestinyButton>

    </div>
    );
}

}

export default Destiny;

