import React, {Component} from 'react';
import Content from './Content';
import Logo from '../../../main/Logo/Logo';
import JHM from '../../../Join/JHM/JHM';


class Self_esteem extends Component {
    render(){
        return(
        <div className="Self_esteem">
        <style>{style}</style>
            <div className="SHM"><JHM></JHM></div>
            <div className="SLogo"><Logo></Logo></div>
            <div className="SContent"><Content></Content></div>
        </div>
        );
    }

}

export default Self_esteem;

const style= `
    .SHM{
        font-family: 'Noto Serif KR', serif;
    }
`