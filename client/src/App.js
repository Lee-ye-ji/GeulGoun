import React, {Component} from 'react';
import {Route,Switch} from 'react-router-dom';
import './App.css';
import Main from './components/main/Main';
import Login from './components/Login/Login';
import Join from './components/Join/Join';
import Memo from './components/Memo/Memo';
import Board from './components/Board/Board';
import BoardWrite from './components/Board/BoardWrite/BoardWrite'
import BoardDetail from './components/Board/BoardDetail/BoardDetail';
// import BoardDetail from './components/Board/BoardDetail/BoardDetail'
import Search_id from  './components/Login/Search_id/Search_id';
// import Pw from './components/Login/PW/PW';

import Happy from './components/Write/Happy/Happy';
import School from './components/Write/Happy/School/School';
import Company from './components/Write/Happy/Company/Company';
import Diet from './components/Write/Happy/Diet/Diet';

import Move from './components/Write/Move/Love';

import Comfort from './components/Write/Comfort/Comfort';
import Relationship from './components/Write/Comfort/Relationship/Relationship';
import Dream from './components/Write/Comfort/Dream/Dream';
import Self_esteem from './components/Write/Comfort/Self-esteem/Self_esteem';

import Auth from './hoc/auth'


class App extends Component {
// export default React.App({
  render(){
    return(
    <div className="App">
      <Switch>
          <Route exact path="/" component={Auth(Main, null)}></Route>
          <Route exact path="/Login" component={Auth(Login, false)} ></Route>
          <Route exact path="/Search_id" component={Search_id}></Route>
          {/* <Route exact path="/Pw" component={Pw}></Route> */}
          <Route exact path="/Join" component={Auth(Join, false)} ></Route>
          
          <Route exact path="/Memo" component={Auth(Memo, true)} ></Route>
          <Route exact path="/Board" component={Auth(Board, true)} ></Route>
          <Route exact path="/Board/Write" component={Auth(BoardWrite,null)}></Route>
          {/* <Route exact path="/Board/Detail" component={Auth(BoardDetail,null)}></Route> */}
          <Route exact path="/Board/:boardId" component={BoardDetail}></Route>

              <Route exact path="/Happy" component={Happy}></Route>
              <Route exact path="/School" component={School}></Route>
              <Route exact path="/Company" component={Company}></Route>
              <Route exact path="/Diet" component={Diet}></Route>

              <Route exact path="/Move" component={Move}></Route>
              
              <Route exact path="/Comfort" component={Comfort}></Route>
              <Route exact path="/Relationship" component={Relationship}></Route>
              <Route exact path="/Dream" component={Dream}></Route>
              <Route exact path="/self_esteem" component={Self_esteem}></Route>

            
      </Switch>
      {/* <Link to="/history"></Link> */}
    </div>
        
    );
  }

}
export default App;
