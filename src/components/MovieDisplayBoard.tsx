import { SimpleGrid } from "@chakra-ui/react";
import useFetch from "../hooks/useFetch";
import MovieCards from "./MovieCards";

interface MovieDisplayBoardProps {
  movieCategory: string;
  pageNumber: number;
  sortBy: string;
}

const MovieDisplayBoard = ({
  movieCategory,
  pageNumber,
  sortBy,
}: MovieDisplayBoardProps) => {
  const { fetchedMovies, IMG_PATH } = useFetch({
    movieCategory,
    pageNumber,
    sortBy,
  });
  return (
    <SimpleGrid columns={{ sm: 2, md: 3, lg: 4, xl: 5 }} gap={3} padding={4}>
      {fetchedMovies?.map((movie) => (
        <MovieCards
          cardImage={IMG_PATH + movie.poster_path}
          cardHeading={movie.title ? movie.title : movie.original_name}
          cardOverview={
            movie.overview ? movie.overview.slice(0, 80) : movie.overview
          }
          key={movie.id}
        />
      ))}
    </SimpleGrid>
  );
};

export default MovieDisplayBoard;
