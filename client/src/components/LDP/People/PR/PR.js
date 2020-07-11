import React, {Component} from 'react';
import './PR.css';
import { Link } from 'react-router-dom';
import pl from './pl.png';
import pd from './pd.png';

class PR extends Component {
render(){
    return(
    <div class="PR">
            <Link to="/love">
                <img id="pl" src={pl} alt={"pl"}/> 
            </Link>
            <Link to="/dream">
                <img id="pd" src={pd} alt={"pd"}/> 
            </Link>
    </div>
    );
}

}

export default PR;