import React, {Component} from 'react';
import './Board.css';
import BHM from './BHM/BHM'
import Table from './Table/Table';
import BTop from './BTop/BTop';
import Bbottom from './Bbottom/Bbottom';
import Logout from '../Logout/Logout';

class Board extends Component {
    render(){
        return(
        <div class="Board">
        <BHM></BHM>
        <Logout></Logout>
        <BTop></BTop>
        <Table></Table>
        <Bbottom></Bbottom>
        </div>
            
        );
    }
    
    }

export default Board;