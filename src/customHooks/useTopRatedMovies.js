import { useEffect } from "react";
import { API_OPTIONS } from "../utils/cosntants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () =>{

    const dispatch = useDispatch();
    const getTopRatedMovies = async() => {

        try{
            const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1", API_OPTIONS);
            const json = await data.json();
            dispatch(addTopRatedMovies(json.results))
        }catch(error){
            console.log("error while fetching the top rated movies:" + error)
        }
    }

    useEffect(()=>{
        getTopRatedMovies();
    },[])

};

export default useTopRatedMovies;