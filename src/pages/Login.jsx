import React, {Component} from 'react';
class Login extends Component{
  render(){
    return (
      <div >
        <button style={{margin:"50px"}} className="btn btn-info" >Sign In With Google</button>
        <button style={{margin:"50px"}} className="btn btn-light" >Sign Up With Google</button>
      </div>
    );
  }
}

export default Login;


