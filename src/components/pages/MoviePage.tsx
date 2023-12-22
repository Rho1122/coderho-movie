import { Box, HStack, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const MoviePage = () => {
  const { id } = useParams();
  const [movieResult, setMovieResult] = useState({
    adult: "",
    backdrop_path: "",
    id: "",
    title: "",
    popularity: "",
    poster_path: "",
    release_date: "",
    vote_average: "",
    vote_count: "",
    overview: "",
    original_name: "",
    first_air_date: "",
  });
  const IMG_PATH = "https://image.tmdb.org/t/p/original/";
  const POSTER_IMG_PATH = "https://image.tmdb.org/t/p/w200/";
  const API_KEY = "67b5f626044ae34bc73f9ea8511cdfd2";

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2N2I1ZjYyNjA0NGFlMzRiYzczZjllYTg1MTFjZGZkMiIsInN1YiI6IjY1MWJiMGQwNzQ1MDdkMDBlMjBmNjExYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D95oUdjBO8_pO8piCp7rF8iH5qHhP_f92BTkjOO-EyU",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/movie/${id}?&api_key=${API_KEY}`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieResult(data);
        console.log(data);
      })
      .catch((err) => console.error(err));
  }, [id]);
  return (
    <>
      <div className="movie-result-holder">
        <img
          src={IMG_PATH + movieResult.backdrop_path}
          className="movie-page-image"
          alt={movieResult.title}
        />
        <div className="movie-shadow">
          <i className="play-icon fa-regular fa-circle-play"></i>
        </div>
      </div>
      <Box>
        <HStack padding={4}>
          <Box>
            <Image
              src={POSTER_IMG_PATH + movieResult.poster_path}
              borderRadius="10px"
            />
          </Box>
        </HStack>
        <Link to="/">
          <div className="btn btn-primary">Return to movies</div>
        </Link>
      </Box>
    </>
  );
};

export default MoviePage;
