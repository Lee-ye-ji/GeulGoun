import React, {Component} from 'react';
import Content from './Content';
import Logo from '../../../main/Logo/Logo';
import JHM from '../../../Join/JHM/JHM';


class Relationship extends Component {
    render(){
        return(
        <div className="Relationship">
        <style>{style}</style>
            <div className="RHM"><JHM></JHM></div>
            <div className="RLogo"><Logo></Logo></div>
            <div className="RContent"><Content></Content></div>
        </div>
        );
    }

}

export default Relationship;

const style= `
    .RHM{
        font-family: 'Noto Serif KR', serif;
    }
`