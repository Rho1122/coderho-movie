import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import MovieCards from "../MovieCards";
import SearchBox from "../SearchBox";
import { Link } from "react-router-dom";

interface movies {
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
  first_air_date: string;
}

interface ActionProps {
  pageTitle: string;
}

const Action = ({ pageTitle }: ActionProps) => {
  const [moviesList, setMovieList] = useState<movies[]>();
  const [movieCategory, setMovieCategory] = useState("top_rated");
  const [pageNumber, setPageNumber] = useState(1);

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
      `https://api.themoviedb.org/3/movie/${movieCategory}?language=en-US&page=${pageNumber}&api_key=${API_KEY}`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieList(data.results);
      })
      .catch((err) => console.error(err));
  }, [movieCategory, pageNumber]);

  const movieCatego = ["Top_rated", "Upcoming"];

  const handleMovie = (item: string) => {
    setMovieCategory(item.toLowerCase());
    setPageNumber(1);
  };

  const handleNext = () => {
    setPageNumber(pageNumber + 1);
  };

  const handlePrev = () => {
    setPageNumber(pageNumber === 1 ? 1 : pageNumber - 1);
  };
  return (
    <Box padding={4}>
      <Box>
        <Heading paddingTop={3}>{pageTitle}</Heading>
        <SearchBox
          buttonList={movieCatego}
          onMovie={handleMovie}
          onNext={handleNext}
          onPrev={handlePrev}
          pageCount={pageNumber}
        />
      </Box>
      <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 5, xl: 7 }} gap={4}>
        {moviesList?.map((movie, index) => {
          return (
            <Link to={`/movie/${movie.id}`}>
              <MovieCards
                cardImage={POSTER_IMG_PATH + movie.poster_path}
                cardDate={movie.release_date}
                cardHeading={movie.title}
                CardVote={movie.vote_average}
                key={index}
              />
            </Link>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default Action;
