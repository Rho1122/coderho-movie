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
    sortBy: string
  }

const useFetch = ({movieCategory, pageNumber, sortBy}: useFetchProps) => {
    const [fetchedMovies, setFetchedMovies] = useState<results[]>();
    const [isLoading, setIsLoading] = useState(false);
    const IMG_PATH = "https://image.tmdb.org/t/p/original/"; 
    const API_KEY = "67b5f626044ae34bc73f9ea8511cdfd2";

useEffect(()=>{
    const BASE_URL =
        `https://api.themoviedb.org/3/discover/${movieCategory}?include_adult=false&include_video=false&language=en-US&page=${pageNumber}&sort_by=${sortBy}.desc&api_key=`;
        setIsLoading(true)
        fetch(BASE_URL + API_KEY)
        .then((response) => response.json())
        .then((data)=> {
            console.log(data.results);
            setFetchedMovies(data.results)
            setIsLoading(false)
        })
        .catch(error => {
            console.error(error)
            setIsLoading(false)
        })
},[movieCategory, pageNumber, sortBy])
  return {fetchedMovies, isLoading, IMG_PATH, setFetchedMovies, setIsLoading, movieCategory, pageNumber, sortBy}
}

export default useFetch
