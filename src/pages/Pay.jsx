import React, {Component} from 'react';
import PayCard from '../components/PayCard'

class Home extends Component{
  render(){
    return (
      <div>
        <PayCard style={{topMargin:"10px",display:"inline-block"}}/>
      </div>  
    );
  }
}

export default Home;