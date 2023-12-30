import { Heading, SimpleGrid } from "@chakra-ui/react";
import useFetch from "../hooks/useFetch";
import MovieCards from "./MovieCards";
import MovieBoardSkeleton from "./skeletons/MovieBoardSkeleton";
import { Link } from "react-router-dom";

interface MovieDisplayBoardProps {
  movieCategory: string;
  pageNumber: number;
  sectionTitle: string;
}

const MovieDisplayBoard = ({
  movieCategory,
  pageNumber,
  sectionTitle,
}: MovieDisplayBoardProps) => {
  const { isLoading, fetchedMovies, POSTER_IMG_PATH } = useFetch({
    movieCategory,
    pageNumber,
  });
  const Skeletions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const movieTitleMaxLength = 15;
  return (
    <>
      <Heading as={"h4"} size={"md"} paddingLeft="20px">
        LATEST {sectionTitle}
      </Heading>
      <SimpleGrid
        columns={{ base: 2, sm: 3, md: 4, lg: 5, xl: 7 }}
        gap={4}
        paddingX={4}
      >
        {isLoading &&
          Skeletions.map((skel) => <MovieBoardSkeleton key={skel} />)}

        {fetchedMovies?.map((movie) => {
          return (
            <Link to={`/movie/${movie.id}`} key={movie.id}>
              <MovieCards
                cardImage={POSTER_IMG_PATH + movie.poster_path}
                cardHeading={
                  movie.title?.length > movieTitleMaxLength
                    ? movie.title.slice(0, 15) + ".."
                    : movie.original_name || movie.title
                }
                cardDate={
                  movie.release_date
                    ? movie.release_date.slice(0, 4)
                    : movie.first_air_date
                }
                CardVote={movie.vote_average}
                key={movie.id}
              />
            </Link>
          );
        })}
      </SimpleGrid>
    </>
  );
};

export default MovieDisplayBoard;
