import React from "react";
import google from "../../images/social/google.png";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";


const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const navigate = useNavigate();
  let errorElement;

  if(loading){
      return <Loading></Loading>
  }

  if (error) {
    errorElement = 
    <p className="text-danger">Error: {error?.message}</p>;
  }

  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div className="w-75 mx-auto">
      <div className="d-flex align-items-center">
        <div className="bg-primary w-50" style={{ height: "1px" }}></div>
        <p className="mt-2 px-2">or</p>
        <div className="bg-primary w-50 " style={{ height: "1px" }}></div>
      </div>
      {errorElement}
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-danger d-block mx-auto  w-100 my-2 px-5"
        >
          <img src={google} alt="" /> Google Sign in
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
