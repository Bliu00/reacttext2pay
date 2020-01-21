import React, {Component} from 'react';
import firebase from "firebase";

class Login extends Component {
  // <!-- after successful login, should take you straight to home.html -->
  callGoogleSignIn(){
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: 'select_account'
    });
    provider.addScope('profile');
    provider.addScope('email');
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(token)
      console.log(user)
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  firebase.auth().onAuthStateChanged(user => {
  if(user) {
    window.location = 'home'; //After successful login, user will be redirected to home.html
  }
});
}

// <!-- sign in with google, but takes you to the addinfo page after -->
callGoogleSignUp(){
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: 'select_account'
    });
    provider.addScope('profile');
    provider.addScope('email');
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(token)
      console.log(user)
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  firebase.auth().onAuthStateChanged(user => {
  if(user) {
    window.location = 'addinfo'; //After successful signup, user will be redirected to addinfo.html
  }
});
}
render(){
  return (
  <div className="login" style={{width: "500px",height: "500px", left: "50%",marginLeft: "-250px",marginTop:"50px",display: "inline-block"}}>
    <div className="login-but" style={{width: "500px",height: "250px"}} >

      <h1 className="card-title" style = {{fontSize:"21px",textAlign: "center",marginTop: "30px"}}>Create Request Link</h1>
      <p className="card-text" style ={{fontSize:"16px",textAlign: "center",marginTop: "25px"}}>Please enter an amount you wish to request.</p>
      <input id="paymentAmount" type="text" placeholder="Request Amount" name="uname" required style= {{borderRadius: "5px",width: "80%", padding: "12px 20px", margin: "8px 0", marginTop: "8px", display: "inline-block", border: "1px solid #ccc", boxSizing: "border-box"}}/>
      <input id="phoneNumber" type="text" placeholder="Phone Number" name="uname" required style= {{borderRadius: "5px",width: "80%", padding: "12px 20px", margin: "12px 0", marginTop: "8px", display: "inline-block", border: "1px solid #ccc", boxSizing: "border-box"}}/>
      <input id="requestDescription" type="text" placeholder="Description" name="uname" required style= {{borderRadius: "5px",width: "80%", padding: "12px 20px", margin: "12px 0", marginTop:"8px", display: "inline-block", border: "1px solid #ccc", boxSizing: "border-box"}}/>
      <br /> 
      <a id="pay"  className="btn btn-info" style = {{ width: "350px",height: "65px",fontSize: "16px",paddingTop: "22px",marginTop:"20px"}} onClick={()=> this.createRequest()} >Send Request</a>
      <a id="return" href="home" className="btn btn-light" style = {{width:"350px",height:"65px",fontSize:"16px",paddingTop: "22px",marginTop: "-99px",visibility: "hidden"}}> Return to Home</a>
    </div>
</div>
);
}
}

export default Login;
