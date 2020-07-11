import React, {Component} from 'react';
import './DL.css';
import { Link } from 'react-router-dom';
import dreampt from './dreampt.png';

class LL extends Component {
render(){
    return(
    <div class="DL">
            <Link to="/LDP">
            <img id="dreampt" src={dreampt} alt={"dreampt"}/> 
            </Link>
    </div>
    );
}

}

export default LL;