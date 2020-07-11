import React, {Component} from 'react';
import './LL.css';
import { Link } from 'react-router-dom';
import lovept from './lovept.png';

class LL extends Component {
render(){
    return(
    <div class="LL">
            <Link to="/LDP">
            <img id="Lovememo" src={lovept} alt={"lovept"}/> 
            </Link>
    </div>
    );
}

}

export default LL;