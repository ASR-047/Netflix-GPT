import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { netflixLogo } from "../utils/cosntants";

const Header = () => {
  //this page includes netflix logo signin page
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((sotre) => sotre.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => { //for unsubscribe read the firebase documentation. Here it is used to unsubscribe when the component unmount.
      if (user) {
        //user is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44 "
        src={netflixLogo}
        alt="logo"
      />
      {user && (
        <div className="flex p-2">
          <img className="w-12 h-12" alt="userIcon" src={user?.userPhoto} />
          <button className="flex text-white font-bold" onClick={handleSignOut}>
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
