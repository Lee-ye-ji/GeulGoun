import React, {Component} from 'react';
import './Farewall.css';
import Logo from '../../../../main/Logo/Logo';
import CHM from '../Couple/CHM/CHM';
import Grid from './Grid/Grid';

class Farewall extends Component {
render(){
    return(
    <div class="Farewall">
    <Logo></Logo>
    <CHM></CHM>
    <Grid></Grid>
    </div>
    );
}

}

export default Farewall;