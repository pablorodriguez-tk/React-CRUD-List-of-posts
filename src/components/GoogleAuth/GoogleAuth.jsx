import React, { useEffect } from "react";
import { useAppContext } from "../../AppContext";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { Button } from "@material-ui/core";

const GoogleAuth = () => {
  const { isSignedIn, setIsSignedIn, setUser } = useAppContext();

  useEffect(() => {
    // if we have user on local storage, means that we are sign in
    if (!localStorage.getItem("userInfo")) return;
    const user = JSON.parse(localStorage.getItem("userInfo"));
    setUser(user);
    setIsSignedIn(true);
  }, [setIsSignedIn, setUser]);

  const responseGoogle = (response) => {
    if (!response.error) {
      localStorage.setItem("userInfo", JSON.stringify(response.profileObj));
      setIsSignedIn(true);
    }
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
          render={(renderProps) => (
            <Button
              color="inherit"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              Sign out
            </Button>
          )}
          buttonText="Logout"
          onLogoutSuccess={logout}
          isSignedIn={true}
        ></GoogleLogout>
      ) : (
        <GoogleLogin
          clientId="527529003103-rosm7f070n079fok8tj31p1i0trg7e2a.apps.googleusercontent.com"
          buttonText="Login"
          render={(renderProps) => (
            <Button
              color="inherit"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              Sign in
            </Button>
          )}
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      )}
    </React.Fragment>
  );
};

export default GoogleAuth;
