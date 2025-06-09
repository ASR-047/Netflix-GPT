import Header from "./Header";
import { useState } from "react";

const Login = () => {

    const [isSignIn, setIsSignIn] = useState(true);

    const toggleSignInForm =() =>{
        setIsSignIn(!isSignIn);
    }
  return (
    <div>
      <Header />
      <div className="relative h-screen">
        <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/cb17c41d-6a67-4472-8b91-cca977e65276/web/IN-en-20250505-TRIFECTA-perspective_03ae1a85-5dcf-4d20-a8a6-1e61f7ef73cb_large.jpg
            "
          alt="background-image"
        />
        <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/12 p-12 bg-black bg-opacity-80 text-white rounded-lg">
          <h1 className="font-bold text-3xl mx-2 py-2">{isSignIn ? "Sign In" : "Sign Up"}</h1>
          {!isSignIn && (
            <>
            <input type="text" placeholder="Full Name"
            className="p-4 m-2 w-full bg-gray-600"/>

            <input type="tel" placeholder="phone number"
            className="p-4 m-2 w-full bg-gray-600"/>
            </>
            )}
          <input
            type="email"
            placeholder="Email Address"
            className="p-4 m-2 w-full bg-gray-600"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-4 m-2 w-full bg-gray-600"
          />
          <button className="p-4 m-2 w-full bg-red-600 rounded-lg font-bold">
            Sign In
          </button>
          <p className="font-bold m-2 cursor-pointer" onClick={toggleSignInForm}>{isSignIn ? "New to Netflix? Sign Up In" : "Already registered? Sign Up"}</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
