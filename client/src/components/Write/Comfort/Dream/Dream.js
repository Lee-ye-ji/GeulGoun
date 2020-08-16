import React, {Component} from 'react';
import Content from './Content';
import Logo from '../../../main/Logo/Logo';
import JHM from '../../../Join/JHM/JHM';


class Dream extends Component {
    render(){
        return(
        <div className="Dream">
        <style>{style}</style>
            <div className="CHM"><JHM></JHM></div>
            <div className="CLogo"><Logo></Logo></div>
            <div className="CContent"><Content></Content></div>
        </div>
        );
    }

}

export default Dream;

const style= `
    .CHM{
        font-family: 'Noto Serif KR', serif;
    }
    .CLogo{
        margin-top: 2%;
    }
    .CContent{
        margin-left:2%;
    }
`