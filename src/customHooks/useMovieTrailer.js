import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/cosntants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer=(movieId)=>{

    const dispatch = useDispatch();

  //fetching data for movie trailer && updating the store with trailer video data
  const getMovieVideos = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/"+ movieId +"/videos?language=en-US",
        API_OPTIONS
      );
      const json = await data.json();
      //console.log(json);

      const filterVideo = json.results.filter((vid) => vid.type == "Trailer");
      //console.log(filterVideo)

      const trailer = filterVideo.length ? filterVideo[2] : json.results[0];
      //console.log(trailer);
      //setTrailerKey(trailer.key);
      dispatch(addTrailerVideo(trailer));
    } catch (error) {
      console.log("error while fetching the movie video:" + error);
    }
  };

  useEffect(() => {
    getMovieVideos();
  }, []);

};

export default useMovieTrailer;