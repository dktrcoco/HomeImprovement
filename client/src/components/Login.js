import React, { useState } from "react";
import { useGoogleLogin } from "react-google-login";
import { Redirect, useHistory } from "react-router-dom";
import Button from "./NewButton";
import "../styles/LoginStyle.css";
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";

// refresh token
import { refreshTokenSetup } from "../utils/refreshToken";

const clientId =
  "111239797672-3lvrii9bgdpun27maknmt1ahrdt0p5tv.apps.googleusercontent.com";

function Login() {
  // state for redirecting to app
  const [showRedirect, setshowRedirect] = useState(false);

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
    // this changes setshowRedirect from false to true if a user 
    // correctly logs in
    setshowRedirect(true)
    // return (
    //   <NavLink className="signinBtn" to="/bills">
    //     Ironman
    //   </NavLink>
    // );
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    onSignin,
    clientId,
    isSignedIn: true,
    accessType: "offline",
  });

  function rerouteToApp() {
    // var signInBtn = document.getElementById("signinButton");
    // if (signInBtn.style.display === "none") {
    //   signInBtn.style.display = "block";
    // } else {
    //   signInBtn.style.display = "none";
    // }
  }

  // need to save on front end info from google acct on login
  // should use redux for this (state management solutions)
  return (
    <div>
      <div>
        {/* <Button href="/bills">Redirect</Button> */}
        </div>
      {showRedirect && <Redirect to="/bills"></Redirect>}
      <button onClick={signIn} id="signinButton" className="button">
        <img src="./assets/img/google.svg" width="18px" height="18px"></img>
        <span className="buttonText">Sign in with Google</span>
      </button>
    </div>
  );
}

export default Login;
