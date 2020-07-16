import React, { Component } from "react";
import './Menu.css';
import { Link } from "react-router-dom";
// import { useMediaQuery } from 'react-responsive'

class Menu extends Component{
    render(){
        // const tablet = useMediaQuery({
        //     query: '(min-device-width: 764px)'
        // })

    return(
        <div className="btn">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        </meta>
            <Link to="/Move">
                <button id="btn1">감동을 주는 글</button>
            </Link>
            <Link to="/Comfort">
                <button id="btn2">위로를 주는 글</button>
            </Link>
            <Link to="/Happy">
                <button id="btn3">웃음을 주는 글</button>
            </Link>
        </div>
    );
    }
}
export default Menu;