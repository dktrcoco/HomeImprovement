import React from "react";
import { useGoogleLogin } from "react-google-login";
import { Redirect, useHistory } from 'react-router-dom';
import Button from './NewButton';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';

// refresh token
import { refreshTokenSetup } from "../utils/refreshToken";

const clientId =
  "111239797672-3lvrii9bgdpun27maknmt1ahrdt0p5tv.apps.googleusercontent.com";

function Login() {

  const onSuccess = (res) => {
    console.log("Login Success: currentUser:", res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    );
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    alert(`Failed to login. 😢 Please try again`);
  };

  const onSignin = () => {
	  return(
		  <NavLink
		  className="signinBtn"
		  to="/bills"
		  >
			  Ironman
		  </NavLink>
	  )
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
	onFailure,
	// onSignin,
    clientId,
    isSignedIn: true,
	accessType: "offline"
  });

  return (
    <div>
		<Button href="/bills">Redirect</Button>
      <button onClick={signIn} className="button">
        <img src="./assets/img/google.svg" width="18px" height="18px"></img>
        <span className="buttonText">Sign in with Google</span>
      </button>
    </div>
  );
}

export default Login;
