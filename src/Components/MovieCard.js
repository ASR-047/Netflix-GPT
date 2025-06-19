import { IMG_CDN_URL } from "../utils/cosntants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4  shadow-md rounded-lg transition-transform 
                    duration-300 transform hover:scale-125 hover:shadow-xl ">
      <img alt="Movie Card" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
