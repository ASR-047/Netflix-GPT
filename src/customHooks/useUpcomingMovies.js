import { useEffect } from "react";
import { API_OPTIONS } from "../utils/cosntants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";


const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?page=1",
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(addUpcomingMovies(json.results));
    } catch (error) {
      console.log("error while fetching the upcoming movies: " + error);
    }
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
