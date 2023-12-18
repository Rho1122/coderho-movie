import { SimpleGrid } from "@chakra-ui/react";
import useFetch from "../hooks/useFetch";
import MovieCards from "./MovieCards";
import MovieBoardSkeleton from "./skeletons/MovieBoardSkeleton";

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
  const { isLoading, fetchedMovies, IMG_PATH } = useFetch({
    movieCategory,
    pageNumber,
    sortBy,
  });
  const Skeletions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <SimpleGrid columns={{ sm: 3, md: 4, lg: 6, xl: 6 }} gap={3} padding={4}>
      {isLoading && Skeletions.map((skel) => <MovieBoardSkeleton key={skel} />)}
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
