import React, {Component} from 'react';
import './Login.css';
import Form from './Form/Form';
import HMLG from './HMLG/HMLG'
import Lg from './Lg/Lg';


class Login extends Component {
render(){
    return(
    <div className="Login">
    <HMLG></HMLG>
    <Lg></Lg>
    <Form></Form>
    </div>
        
    );
}

}

export default Login;