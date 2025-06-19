import { backgroundImage } from "../utils/cosntants";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage = () => {

    return (
        <div>
            <div className="absolute -z-20">
                <img src={backgroundImage} alt="background image"
                className=" object-cover"/>
            </div>
            
            <GptSearchBar/>
            <GptMovieSuggestion/>
        </div>
    )

}

export default GptSearchPage;