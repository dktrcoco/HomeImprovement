import React from 'react';
import { useGoogleLogout } from 'react-google-login';

const clientId =
  '111239797672-3lvrii9bgdpun27maknmt1ahrdt0p5tv.apps.googleusercontent.com';

function Logout() {
  const onLogoutSuccess = (res) => {
    console.log('Logged out Success');
    alert('Logged out Successfully ✌');
  };

  const onFailure = () => {
    console.log('Handle failure cases');
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <button onClick={signOut} className="button">
      <img src="./assets/img/google.svg" class="icon" width="18px" height="18px"></img>

      <span className="buttonText">Sign out</span>
    </button>
  );
}

export default Logout;