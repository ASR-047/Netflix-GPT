import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({

    name : "movies",
    initialState : {
        nowPlayingMovies : [],
        trailerVideo : null,
        popularMovies : null,
        topRatedMovies : null,
        upComingMovies : null,
    },
    reducers : {
        addPopularMovies : (state,action) =>{
             state.popularMovies = action.payload;
        },

        addNowPlayingMovie : (state,action) =>{

            state.nowPlayingMovies = action.payload;
        },

        addTopRatedMovies : (state,action) => {
            state.topRatedMovies = action.payload;
        },

        addUpcomingMovies : (state,action) => {
            state.upComingMovies = action.payload;
        },

        addTrailerVideo : (state, action) =>{
            state.trailerVideo = action.payload;

        }
    }

});

export const {addNowPlayingMovie, addTrailerVideo, addPopularMovies,addTopRatedMovies, addUpcomingMovies} = movieSlice.actions;

export default movieSlice.reducer;