import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer=() =>{

    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    //if(movies==null) return;
    if(!movies || movies.length < 9) return;

    const mainMovie = movies[7];
    //console.log(mainMovie);

    const {original_title, overview, id} = mainMovie;

    return(
        <div>
            <VideoTitle title={original_title} overview={overview}/>
            <VideoBackground movieId={id}/>
        </div>
    )
};

export default MainContainer;