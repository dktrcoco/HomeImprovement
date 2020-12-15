import React, { useState } from "react";
import { useGoogleLogin } from "react-google-login";
import "../styles/LoginStyle.css";

// refresh token
import { refreshTokenSetup } from "../utils/refreshToken";

const clientId =
  "111239797672-3lvrii9bgdpun27maknmt1ahrdt0p5tv.apps.googleusercontent.com";

function Login(param) {
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
    userPicContainer.innerHTML = "<img class='pic' src=" + URLImage + "></img>";

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

  return (
    <button onClick={signIn} id="signinButton" className="loginButton">
      <div className="google-icon-wrapper">
        <img className="google-icon" src="./assets/img/google.svg"></img>
      </div>

      <span className="btn-text">Sign in with Google</span>
    </button>
  );
}

export default Login;
