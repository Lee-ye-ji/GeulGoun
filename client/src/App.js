import React, {Component} from 'react';
import {Route,Switch, Link} from 'react-router-dom';
import './App.css';
import Main from './components/main/Main';
import Login from './components/Login/Login';
import Join from './components/Join/Join';
import LDP from './components/LDP/LDP';
import Memo from './components/Memo/Memo';
import Board from './components/Board/Board';

import Love from './components/LDP/Love/LoveCollection/Love';
import Couple from './components/LDP/Love/LoveContent/Couple/Couple';
import Destiny from './components/LDP/Love/LoveContent/Destiny/Destiny';
import Farewall from './components/LDP/Love/LoveContent/Farewall/Farewall';
import Crush from './components/LDP/Love/LoveContent/Crush/Crush';

import Dream from './components/LDP/Dream/Dream';
import People from './components/LDP/People/People';

import Auth from './hoc/auth'

class App extends Component {
  render(){
    return(
    <div className="App">
      <Switch>
          <Route exact path="/" component={Auth(Main, null)}></Route>
          <Route exact path="/Login" component={Auth(Login, false)} ></Route>
          <Route exact path="/Join" component={Auth(Join, false)} ></Route>
          <Route exact path="/LDP" component={Auth(LDP, null)} ></Route>
          <Route exact path="/Memo" component={Auth(Memo, true)} ></Route>
          <Route exact path="/Board" component={Auth(Board, true)} ></Route>
          
            <Route exact path="/Love" component={Love}></Route>
              <Route exact path="/Couple" component={Couple}></Route>
              <Route exact path="/Destiny" component={Destiny}></Route>
              <Route exact path="/Farewall" component={Farewall}></Route>
              <Route exact path="/Crush" component={Crush}></Route>
              
            <Route exact path="/Dream" component={Dream}></Route>
            <Route exact path="/People" component={People}></Route>
            
      </Switch>
      <Link to="/history"></Link>
    </div>
        
    );
  }

}
export default App;
