import React from "react";
import "../styles/LogoutStyle.css";
import { useGoogleLogout } from "react-google-login";

const clientId =
  "111239797672-3lvrii9bgdpun27maknmt1ahrdt0p5tv.apps.googleusercontent.com";

function Logout() {
  const onLogoutSuccess = (res) => {
    console.log("Logged out Success");

    // this line is critical, it will remove the cookie used for identification
    // after a user logs out
    document.cookie = "googleId=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";

    // code for rerouting after signing out
    if (window.location.pathname === "/home") {
    } else {
      window.location.replace("/home");
    }
  };

  const onFailure = () => {
    console.log("Handle failure cases");
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  const style = {
    display: "none",
  };

  return (
    <button
      onClick={signOut}
      id="logoutButton"
      style={style}
      className="logoutButton"
    >
      <div className="google-icon-wrapper">
        <img
          src="./assets/img/google.svg"
          className="google-icon"
        ></img>
      </div>

      <span className="btn-text">Sign out</span>
    </button>
  );
}

export default Logout;
