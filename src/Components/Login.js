import Header from "./Header";
import { useRef, useState } from "react";
import { checkValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { backgroundImage, userPhoto } from "../utils/cosntants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispath = useDispatch();


  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);
  const phone = useRef(null);

  const handleButtonClick = () => {
   
    
        

    let message;
    if (isSignIn) {
      //signIn page data validation
      
      message = checkValidateData(
        null,
        email.current.value,
        password.current.value,
        null,
        true
      );
      
      setErrorMessage(message);
    } else {
      //signUp page data validation
            

      message = checkValidateData(
        name.current.value,
        email.current.value,
        password.current.value,
        phone.current.value,
        false
      );
      setErrorMessage(message);
      console.log(name.current.value);
      console.log(phone.current.value);
    }

    if (message) return;

    if (!isSignIn) {
      //signup page authentication
           

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
          displayName: name.current.value, photoURL: userPhoto
        }).then(() => {
          const {uid,email,displayName,photoURL} = auth.currentUser;
          dispath(addUser({
                  uid: uid,
                  email : email,
                  displayName : displayName,
                  photoURL : photoURL
              }));
          // Profile updated!
         
        }).catch((error) => {
          // An error occurred
          setErrorMessage(error.message)
        });

          console.log(user);
          

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //sign in authentication
           

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error("SignIn Error:", errorCode, errorMessage)
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="relative h-screen">
        <img
          className="w-full h-full object-cover"
          src={backgroundImage}
          alt="background-image"
        />
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/12 p-12 bg-black bg-opacity-80 text-white rounded-lg"
        >
          <h1 className="font-bold text-3xl mx-2 py-2">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <>
              <input
                ref={name}
                type="text"
                placeholder="Full Name"
                className="p-4 m-2 w-full bg-gray-600"
              />

              <input
                ref={phone}
                type="tel"
                placeholder="phone number"
                className="p-4 m-2 w-full bg-gray-600"
              />
            </>
          )}
          <input
            ref={email}
            required
            type="email"
            placeholder="Email Address"
            className="p-4 m-2 w-full bg-gray-600"
          />
          <input
            ref={password}
            required
            type="password"
            placeholder="Password"
            className="p-4 m-2 w-full bg-gray-600"
          />
          <p className="font-bold text-red-700 text-lg py-2 m-2">
            {errorMessage}
          </p>
          <button type="button"
            className="p-4 m-2 w-full bg-red-600 rounded-lg font-bold"
            onClick={handleButtonClick}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="font-bold m-2 cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignIn
              ? "New to Netflix? Sign Up"
              : "Already registered? Sign In"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
