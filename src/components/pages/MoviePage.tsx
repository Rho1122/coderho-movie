import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SideBar from "../SideBar";

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
      <Box padding={4}>
        <SimpleGrid
          columns={{ base: 1, sm: 1, lg: 2, xl: 3 }}
          spacing={4}
          padding="30px"
        >
          <Box padding={4}>
            <Image
              src={IMG_PATH + movieResult.poster_path}
              borderRadius="10px"
            />
          </Box>
          <Box padding={4} marginTop="30px">
            <Heading as="h4" size="md">
              {movieResult.title}
            </Heading>
            <Text>Release Date: {movieResult.release_date}</Text>
            <Text>Movie Oview: {movieResult.overview}</Text>
            <Text>Movie Rating: {movieResult.vote_average}</Text>
            <Text>Movie Original Name: {movieResult.original_name}</Text>
          </Box>

          <Box>
            <SideBar
              movieCategory="movie"
              pageNumber={1}
              pageTitle="Latest Movies"
            />
          </Box>
        </SimpleGrid>

        <Link to="/">
          <div className="btn btn-primary">Return to movies</div>
        </Link>
      </Box>
    </>
  );
};

export default MoviePage;
