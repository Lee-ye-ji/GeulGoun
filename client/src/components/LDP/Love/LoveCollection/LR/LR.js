import React, {Component} from 'react';
import './LR.css';
import { Link } from 'react-router-dom';
import pp from './pp.png';
import pd from './pd.png';

class LR extends Component {
render(){
    return(
    <div class="LR">
            <Link to="/dream">
            <img id="pd" src={pd} alt={"pd"}/> 
            </Link>
            <Link to="/people">
            <img id="pp" src={pp} alt={"pp"}/> 
            </Link>
    </div>
    );
}

}

export default LR;