import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config?.lang );

  

  return (
    <div className="pt-[5%] flex justify-center ">
      <form className=" w-1/2 bg-black grid grid-cols-12 rounded-lg">
        <input
          type="text"
          className="p-4 m-4 col-span-9 rounded-md"
          //placeholder={lang[langKey].gptSearchPlaceHolder}
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button className="text-white py-2 px-4 m-4 bg-red-700 rounded-md col-span-3">
          🔍{lang[langKey].search}
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;
