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

function Login(param) {
  // state for redirecting to app
  const [showRedirect, setshowRedirect] = useState(false);

  //
  const [user, setUser] = useState({});

  const onSuccess = (res) => {
    // this line is critical, it will allow access to the unique googleId
    // of the login user in order to track
    document.cookie = "googleId=" + res.profileObj.googleId;
    console.log("Login Success: currentUser:", res.profileObj.googleId);
    console.log(res.profileObj);

    // setting style so sign in/sign out buttons are only available when they should be used
    var loginBtn = document.getElementById("signinButton");
    var logoutBtn = document.getElementById("logoutButton");
    loginBtn.style.display = "none";
    logoutBtn.style.display = "block";

    // setting pic of user that is logged in to display
    var userPicContainer = document.getElementById("userPicContainer");
    var URLImage = res.profileObj.imageUrl;
    userPicContainer.innerHTML = "<img src=" + URLImage + "></img>";

    // code for rerouting after signing in
    if (window.location.pathname !== "/home") {
    } else {
      window.location.replace("/bills");
    }

    // referring back to app.js
    setUser({ userName: res.profileObj.name });
    console.log(user);

    refreshTokenSetup(res);
    return res.profileObj;
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    alert(`Failed to login. 😢 Please try again`);
  };

  // react google login
  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: "offline",
  });

  // need to save on front end info from google acct on login
  // should use redux for this (state management solutions)
  return (
    <div>
      <button onClick={signIn} id="signinButton" className="button">
        <img src="./assets/img/google.svg" width="18px" height="18px"></img>
        <span className="buttonText">Sign in with Google</span>
      </button>
    </div>
  );
}

export default Login;
