import React, {Component} from 'react';
import RequestCard from "../components/RequestCard"

class Home extends Component{
  render(){
    return (
      <div className='homeRow'>
        <RequestCard/> 
      </div>  
    );
  }
}

export default Home;