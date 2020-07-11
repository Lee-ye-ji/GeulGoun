import React, {Component} from 'react';
import './DR.css';
import { Link } from 'react-router-dom';
import pp from './pp.png';
import pl from './pl.png';

class DR extends Component {
render(){
    return(
    <div class="DR">
            <Link to="/people">
                <img id="pp" src={pp} alt={"pp"}/> 
            </Link>
            <Link to="/love">
                <img id="pl" src={pl} alt={"pl"}/> 
            </Link>
    </div>
    );
}

}

export default DR;