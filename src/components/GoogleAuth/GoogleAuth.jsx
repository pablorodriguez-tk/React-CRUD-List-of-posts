import React, { useEffect } from "react";
import { useAppContext } from "../../AppContext";
import { GoogleLogin, GoogleLogout } from "react-google-login";

const GoogleAuth = () => {
  const { isSignedIn, setIsSignedIn, setUser } = useAppContext();

  useEffect(() => {
    //if we have user on local storage, means that we are sign in
    const user = JSON.parse(localStorage.getItem("userInfo"));
    setUser(user);
    if (user) {
      setIsSignedIn(true);
    }
  }, [setIsSignedIn, setUser]);

  const responseGoogle = (response) => {
    localStorage.setItem("userInfo", JSON.stringify(response.profileObj));

    setIsSignedIn(true);
  };

  const logout = () => {
    localStorage.clear();
    setIsSignedIn(false);
  };
  return (
    <React.Fragment>
      {isSignedIn ? (
        <GoogleLogout
          clientId="527529003103-rosm7f070n079fok8tj31p1i0trg7e2a.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={logout}
          isSignedIn={true}
        ></GoogleLogout>
      ) : (
        <GoogleLogin
          clientId="527529003103-rosm7f070n079fok8tj31p1i0trg7e2a.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      )}
    </React.Fragment>
  );
};

export default GoogleAuth;
