import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  //console.log(movies)

  return (
    movies && (
      <div className="  bg-black">
        <div className="-mt-90 pl-12  relative z-20">
          <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
          <MovieList title={"Top Rated Movies"} movies={movies?.topRatedMovies} />
          <MovieList title={"Popular Movies"} movies={movies?.popularMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies?.upComingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;

{
  /*
    
            -movies lists (popular movies, trending movies, now playing movies, action movies)
            -each movie list will have multiple movie cards
            */
}
