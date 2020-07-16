import React, {Component} from 'react';

import JHM from '../../Join/JHM/JHM';
import Logo from '../../main/Logo/Logo';
import CardCT from './CardCT';
import './Comfort.css';

class Comfort extends Component {
    render(){
        return(
        <div class="Comfort">
        <style>{style}</style>
        <JHM></JHM>
        <Logo></Logo>
        <CardCT></CardCT>
    
        </div>
        );
    }

}

export default Comfort;

const style= `
    .JHM{
        font-family: 'Noto Serif KR', serif;
    }
`