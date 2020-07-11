import React, {Component} from 'react';
import './PL.css';
import { Link } from 'react-router-dom';
import peoplept from './peoplept.png';

class PL extends Component {
render(){
    return(
    <div class="PL">
            <Link to="/LDP">
            <img id="peoplept" src={peoplept} alt={"peoplept"}/> 
            </Link>
    </div>
    );
}

}

export default PL;