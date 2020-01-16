import React, {Component} from 'react';
import Card from '../components/Card';

class Incomplete extends Component{
  render(){
    return (
      <div className='homeRow'>
        <Card title="Dominos" cost="14.38" 
        desc="Pasta & Wings"/> 
        <Card title="Pizza Hut" cost="15.24"
        desc="Cheese sticks and Meat Lover's Pizza" />
        <Card title="Freebirds" cost="12.99"
        desc="Steak burrito and Hornitos"/>
        <Card title="Hana Kitchen" cost="9.99"
        desc="Large Chicken Bowl & Boba"/>
      </div>  
    );
  }
}

export default Incomplete;