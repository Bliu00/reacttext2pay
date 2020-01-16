import React, {Component} from 'react';
import RequestCard from "../components/RequestCard"
import  { FirebaseContext } from '../components/Firebase'
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