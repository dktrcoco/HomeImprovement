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
    // event.preventDefault();
    document.cookie = "googleId=" + res.profileObj.googleId;
    console.log("Login Success: currentUser:", res.profileObj.googleId);
    console.log(res.profileObj);
    var loginBtn = document.getElementById("signinButton");
    var logoutBtn = document.getElementById("logoutButton");
    var userPicContainer = document.getElementById("userPicContainer");
    loginBtn.style.display = "none";
    logoutBtn.style.display = "block";
    var URLImage = res.profileObj.imageUrl;
    userPicContainer.innerHTML = "<img src=" + URLImage + "></img>";

    if (window.location.pathname !== "/home") {
    } else {
      window.location.replace("/bills");
    }

    console.log("URL: " + URLImage);

    console.log(res.profileObj.imageUrl);
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

  const onSignin = () => {
    // this changes setshowRedirect from false to true if a user
    // correctly logs in
    // console.log("Gummy bears");
    // window.location.replace("./bills");
    // setshowRedirect(true);
    // window.location.replace("/bills");
    // window.location.href = "./bills";
    // return (
    //   <NavLink className="signinBtn" to="/bills">
    //     Ironman
    //   </NavLink>
    // );
  };

  // react google login
  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    // onSignin,
    clientId,
    isSignedIn: true,
    accessType: "offline",
  });

  function rerouteToApp() {}

  // need to save on front end info from google acct on login
  // should use redux for this (state management solutions)
  return (
    <div>
      {/* <div><img src={URLImage} alt="User Image" /> </div> */}
      {/* {showRedirect && <Redirect to="/bills"></Redirect>} */}
      <button onClick={signIn} id="signinButton" className="button">
        <img src="./assets/img/google.svg" width="18px" height="18px"></img>
        <span className="buttonText">Sign in with Google</span>
      </button>
    </div>
  );
}

export default Login;
