import React  from 'react';
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import Bottom from "./Bottom/Bottom";
import HM from "./HM/HM";
import './Main.css';
import { withRouter } from 'react-router-dom'; 

function Main(props){


    return(
    <div class="Main">
        <HM></HM>
        <Logo></Logo>
        <Menu></Menu>
        <Bottom></Bottom>
    </div>
    );

}
export default withRouter(Main)