import React  from 'react';
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import Bottom from "./Bottom/Bottom";
import HM from "./HM/HM";
import './Main.css';
import { withRouter } from 'react-router-dom'; 
import { useMediaQuery } from 'react-responsive';

function Main(){
    const Small = useMediaQuery({ query: '(max-width: 846px)' })
    const Big = useMediaQuery({ query: '(min-width: 847px)'})

    return(
    <div className="Main">
    { Small && <>
        <HM></HM>
        <Logo></Logo>
        <Menu></Menu>
    </>}
    { Big && <>
        <HM></HM>
        <Logo></Logo>
        <Menu></Menu>
        <Bottom></Bottom>
    </>}
    </div>
    );

}
export default withRouter(Main)