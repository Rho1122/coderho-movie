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
  const { isLoading, fetchedMovies, POSTER_IMG_PATH } = useFetch({
    movieCategory,
    pageNumber,
    sortBy,
  });
  const Skeletions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <SimpleGrid
      columns={{ base: 2, sm: 3, md: 4, lg: 5, xl: 7 }}
      gap={4}
      padding={4}
    >
      {isLoading && Skeletions.map((skel) => <MovieBoardSkeleton key={skel} />)}
      {fetchedMovies?.map((movie) => (
        <MovieCards
          cardImage={POSTER_IMG_PATH + movie.poster_path}
          cardHeading={movie.title ? movie.title : movie.original_name}
          cardDate={
            movie.release_date
              ? movie.release_date.slice(0, 4)
              : movie.first_air_date.slice(0, 4)
          }
          CardVote={movie.vote_average}
          key={movie.id}
        />
      ))}
    </SimpleGrid>
  );
};

export default MovieDisplayBoard;
