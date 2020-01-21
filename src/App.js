import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import 'firebase/auth';

import NavbarPage from './components/NavBarPage';
import MainPage from './pages/MainPage';
import HomePage from './pages/Home';
import RequestPage from './pages/Request';
import IncompletePage from './pages/Incomplete';
import PayPage from "./pages/Pay"
import AddInfo from "./pages/ExtraInfo"

class App extends Component{
  render(){
    return (
      <div className="App">
        {/* <NavbarPage /> */}
        <Router>
          <Route path="/" exact component={MainPage} />
          <Route path="/home" exact component ={HomePage}/>
          <Route path="/request" exact component={RequestPage} />
          <Route path="/incomplete" exact component={IncompletePage}/>
          <Route path="/login" exact component={MainPage}/>
          <Route path="/pay" exact component={PayPage}/>
          <Route path="/addinfo" exact component={AddInfo}/>
        </Router>
      </div>
    );
  }
}

export default App;
