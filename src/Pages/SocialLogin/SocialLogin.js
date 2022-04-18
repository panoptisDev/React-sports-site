import React from "react";
import google from "../../../images/social/google.png";
import facebook from "../../../images/social/facebook.png";
import github from "../../../images/social/github.png";
import { useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/NotFound/Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle,  user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

  const navigate = useNavigate();
  let errorElement;

  if(loading || loading1){
      return <Loading></Loading>
  }

  if (error || error1) {
    errorElement = (
      
        <p className="text-danger">Error: {error?.message} {error1?.message}</p>
     
    );
  }

  if (user || user1) {
    navigate("/home");
  }

  return (
    <div className="w-50 mx-auto">
      <div className="d-flex align-items-center">
        <div
          className="bg-primary w-50"
          style={{ height: "1px" }}
        ></div>
        <p className="mt-2 px-2">or</p>
        <div
          className="bg-primary w-50 "
          style={{ height: "1px" }}
        ></div>
      </div>
      {errorElement}
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-info d-block mx-auto  w-100 my-2 px-5"
        >
          <img src={google} alt="" /> Google Sign in
        </button>

        <button className="btn btn-info d-block mx-auto w-100 my-2 px-5">
          <img src={facebook} alt="" />
          Facebook Sign in
        </button>
        <button onClick={() => signInWithGithub()} className="btn btn-info d-block mx-auto w-100 my-2 px-5">
          <img src={github} alt="" /> Github Sign in
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
