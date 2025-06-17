import { API_OPTIONS } from "../utils/cosntants";
import {useDispatch} from 'react-redux'
import {addNowPlayingMovie} from '../utils/movieSlice'
import { useEffect } from "react";



const useNowPlayingMovies= () =>{

    //Fetching the movies data from TMDB and update the store
    const dispatch = useDispatch();

    const getNowPlayingMovies = async() => {

        try{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
        const json = await data.json();
        console.log(json.results);
        dispatch(addNowPlayingMovie(json.results));
        }catch(error){
            console.log("erro while fetching the movies: " + error)

        }
    }

    useEffect(()=>{
            getNowPlayingMovies();
    },[])
}

export default useNowPlayingMovies;


