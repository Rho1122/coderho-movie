import { Box, Heading } from "@chakra-ui/react";
import useFetch from "../hooks/useFetch";
import SideBarItem from "./SideBarItem";
import SideBarSkeleton from "./skeletons/SideBarSkeleton";
import { Link } from "react-router-dom";

interface SideBarProps {
  movieCategory: string;
  pageNumber: number;
  pageTitle: string;
}
const SideBar = ({ movieCategory, pageNumber, pageTitle }: SideBarProps) => {
  const { isLoading, fetchedMovies, IMG_PATH } = useFetch({
    movieCategory,
    pageNumber,
  });

  const sideBarSkeleton = [1, 2, 3, 4, 5, 6, 7];
  return (
    <Box>
      <Heading as="h4" size="lg" marginLeft={3}>
        {pageTitle}
      </Heading>
      {isLoading &&
        sideBarSkeleton.map((skel) => <SideBarSkeleton key={skel} />)}
      {fetchedMovies
        ?.map((movie, index) => {
          return (
            <Link to={`/movie/${movie.id}`} key={index}>
              <SideBarItem
                sideBarImage={IMG_PATH + movie.poster_path}
                sideBarHeading={
                  movie.title ? movie.title.slice(0, 20) : movie.original_name
                }
                sideBarOverview={
                  movie.overview ? movie.overview.slice(0, 20) : movie.overview
                }
                key={index}
              />
            </Link>
          );
        })
        .slice(0, 7)}
    </Box>
  );
};

export default SideBar;
