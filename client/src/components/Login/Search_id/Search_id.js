import React, {Component} from 'react';
import HMLG from '../HMLG/HMLG';
import Lg from '../Lg/Lg';
import IdForm from './IdForm';
import './Search_id.css';


class Search_id extends Component {
render(){
    return(
    <div class="Id">
    <HMLG></HMLG>
    <Lg></Lg>
    <IdForm></IdForm>
    </div>
        
    );
}

}

export default Search_id;