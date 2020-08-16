import React, { Component } from "react";
import typescript from './typescript.png'
import './Bottom.css';
import Typist from "react-typist";

class Bottom extends Component{
    render(){
    return(
    <div className="bottom">
        {/* <image> */}
        <img id="typescript" src={typescript} alt={"typescript"}/> 
        {/* </image> */}
        <div className="typingeffect">
        <Typist>
        <p id="type-in">말도 아름다운 꽃처럼 그 색깔을 지니고 있다.</p>
        <p id="type-after"> -E.리스-</p>
        </Typist>
        </div>
    </div>

    );
    }
}
export default Bottom;