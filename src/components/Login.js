import React from 'react';
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";


function Login() {
    const navigate=useNavigate()
    const onSuccess = (res) => {
        console.log('Login Success: currentUser:', res.profileObj);
        navigate('/Noodle');
        
  };



  return (
    <div>
    <GoogleLogin
      buttonText="Login"
      onSuccess={onSuccess}
      cookiePolicy={"single_host_origin"}
      style={{ marginTop: "100px" }}
      isSignedIn={true}
    />
  </div>
  )
}

export default Login;