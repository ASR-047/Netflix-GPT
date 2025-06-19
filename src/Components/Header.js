import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LANGUAGE_SUPPORTED, netflixLogo } from "../utils/cosntants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import {showGptSearch} from "../utils/gptSlice"

const Header = () => {
  //this page includes netflix logo signin page
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((sotre) => sotre.user);

  const showGptSearch = useSelector(store=>store.gpt.showGptSearch)

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
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      //for unsubscribe read the firebase documentation. Here it is used to unsubscribe when the component unmount.
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

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e) => {
    console.log(e.target.value)
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44 " src={netflixLogo} alt="logo" />
      {user && (
        <div className="flex p-2">
          { showGptSearch && (<select
            className=" p-2 bg-gray-700 text-white m-2 cursor-pointer"
            onChange={handleLanguageChange}
          >
            {LANGUAGE_SUPPORTED.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>)}
          
          <button
            className="bg-purple-700 rounded-md text-white py-2 px-2 mx-4 my-2"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home Page" : "GPT Search"}
          </button>
          <img className="w-12 h-12" alt="userIcon" src={user?.userPhoto} />
          <button className=" text-white font-bold" onClick={handleSignOut}>
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
