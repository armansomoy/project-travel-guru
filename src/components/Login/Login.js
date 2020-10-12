import React , { useContext, useState }  from 'react';
import { Button, Form } from 'react-bootstrap';
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);





const Login = () => {
    const [ newUser, setNewUser ] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '', 
    email: '',
    password: '',
    photo: ''
  })

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || {from: {pathname: "/" } };


  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const fbProvider = new firebase.auth.FacebookAuthProvider();

  const handleSignIn = () => {
    firebase.auth().signInWithPopup(googleProvider)
    .then(res => {
      const {displayName, photoURL,  email} = res.user;
      const signedInUser = {
        isSignedIn : true,
        name : displayName,
        email : email,
        photoURL : photoURL
      }
      setUser(signedInUser);
    })
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    });
  }

  
  const handleSignOut = () => {
    firebase.auth().signOut()
    .then( res => {
      const signedOutUser = {
        isSignedIn: false,
        name: '',
        email: '',
        photoURL: '',
        error: '',
        success: false
      }
      setUser(signedOutUser);
    })
    .catch(function(error) {
    });
  }

  const handleFbSignIn = () => {
    firebase.auth().signInWithPopup(fbProvider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
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
  }





  const handleBlur = (e) => {
    let isFieldValid = true;
    console.log(e.target.name, e.target.value);
    if( e.target.name === 'email' ){
      isFieldValid =/\S+@\S+\.\S+/.test(e.target.value);
    }
    if( e.target.name === 'password' ){
      const isPasswordValid = e.target.value.length >= 8;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if(isFieldValid){
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }

  const handleSubmit = (e) => {
    if( newUser && user.name && user.password){
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then( res => {
        const newUserInfo = {...user};
        newUserInfo.error = '';
        newUserInfo.success = true;
        setUser(newUserInfo);
        updateUserName(user.name);
      })
      .catch(error => {
        const newUserInfo = {...user};
        newUserInfo.error = error.message;
        newUserInfo.success = false;
        setUser(newUserInfo);
      });
    }
    if(!newUser && user.email && user.password){
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        const newUserInfo = {...user};
        newUserInfo.error = '';
        newUserInfo.success = true;
        setUser(newUserInfo);
        setLoggedInUser(newUserInfo);
        history.replace(from);
        console.log('Sign In user Info', res.user);
      })
      .catch(function(error) {
        const newUserInfo = {...user};
        newUserInfo.error = error.message;
        newUserInfo.success = false;
        setUser(newUserInfo);
      });
    }
    e.preventDefault();
  }

  const updateUserName = name => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name

    })
    .then(function() {
      console.log('User Name Updated Successfully')
    })
    .catch(function(error) {
      // An error happened.
    });
  }



    return ( 
            <div className="container">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6 main">
                        <Form className="login-form" onSubmit={handleSubmit}>
                        <h4>{newUser ? 'Create An Account' : 'Login'}</h4>
                            <Form.Group controlId="formBasicEmail">
                                {
                                    newUser && <Form.Control type="text" placeholder="Your Name" onBlur={handleBlur} name="name" id="" required />
                                }
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder={newUser ? 'Email' : 'Username or Email'} onBlur={handleBlur} name="email" required />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" onBlur={handleBlur} name="password" id="" required />
                            </Form.Group>
                            <Form.Group  controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember Me" />
                            </Form.Group>
                            <button type="submit" className="btn btn-warning tg-primary btn-block"  value={newUser ? 'Sign Up' : 'Login'}>
                            {newUser ? 'Sign Up' : 'Login'}
			            	</button>
                            <p>Don't have an account? <span onClick={ () => setNewUser(!newUser) }  style={{color: 'red', cursor: 'pointer'}} > Create an account</span> </p>
                            <p style={{ color: 'red'}}>{user.error} </p>
                            {
                                user.success && <p style={{ color: 'green'}}>User { newUser ?  'Created' : 'Logged In'} Successfully</p>
                            }
                        </Form>
                        <div className="facebook-login" onCLick={handleFbSignIn} > <p>Continue With Facebook</p> </div>
                        <div className="google-login" onClick={handleSignIn} > <p>Continue With Google</p> </div>
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>
    );
};

export default Login;