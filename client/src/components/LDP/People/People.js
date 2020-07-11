import React, {Component} from 'react';
import Logo from "../../main/Logo/Logo";
import HM from "../../main/HM/HM";
import './People.css';
import PL from './PL/PL';
import Pmenu from './Pmenu/Pmenu';
import PR from './PR/PR';

class People extends Component {
render(){
    return(
    <div class="People">
        <HM></HM>
        <Logo></Logo>
        <div className="Peoplebd">
            <PL></PL>
            <Pmenu></Pmenu>
            <PR></PR>
        </div>
    </div>
    );
}

}

export default People;