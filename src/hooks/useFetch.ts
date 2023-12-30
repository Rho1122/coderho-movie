import { useEffect, useState } from "react"

interface results {
    adult: string;
    backdrop_path: string;
    id: number;
    title: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    vote_average: number;
    vote_count: number;
    overview: string;
    original_name: string;
    first_air_date: string
  }
 interface useFetchProps {
    movieCategory: string;
    pageNumber: number;
  
  }

const useFetch = ({movieCategory, pageNumber}: useFetchProps) => {
    const [fetchedMovies, setFetchedMovies] = useState<results[]>();
    const [isLoading, setIsLoading] = useState(false);
    const IMG_PATH = "https://image.tmdb.org/t/p/original/"; 
    const POSTER_IMG_PATH = "https://image.tmdb.org/t/p/w200/"; 
    const API_KEY = "67b5f626044ae34bc73f9ea8511cdfd2";

useEffect(()=>{
   const BASE_URL =
        `https://api.themoviedb.org/3/discover/${movieCategory}?&language=en-US&page=${pageNumber}&sort_by=popularity.desc&api_key=`;
        setIsLoading(true)
        fetch(BASE_URL + API_KEY)
        .then((response) => response.json())
        .then((data)=> {
            setFetchedMovies(data.results);
            setIsLoading(false);
        })
        .catch(error => {
            console.error(error);
            setIsLoading(false);
        })
},[movieCategory, pageNumber])
  return {fetchedMovies, isLoading, IMG_PATH, POSTER_IMG_PATH, setFetchedMovies, setIsLoading, movieCategory, pageNumber}
}

export default useFetch
