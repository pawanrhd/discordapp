import { Button } from "@material-ui/core";
import { auth, provider } from "./Firebase";
import React from "react";
import "./Login.css";

function Login() {
  const signIn = () => {
    // Google Login
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiRzTihzUSWAfGgpWFJ3FX2qLEWJqBse2P9g&usqp=CAU"
          alt=""
        />
      </div>

      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
