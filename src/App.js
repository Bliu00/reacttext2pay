import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import NavbarPage from './components/NavBarPage';
import HomePage from './pages/Home';
import RequestPage from './pages/Request';
import IncompletePage from './pages/Incomplete';
import LoginPage from "./pages/Login"
import PayPage from "./pages/Pay"
class App extends Component{
  render(){
    return (
      <div className="App">
        <NavbarPage />
        <Router>
          <Route path="/" exact component={HomePage} />
          <Route path="/request" exact component={RequestPage} />
          <Route path="/incomplete" exact component={IncompletePage}/>
          <Route path="/login" exact component={LoginPage}/>
          <Route path="/pay" exact component={PayPage}/>
        </Router>
      </div>
    );
  }
}

export default App;
