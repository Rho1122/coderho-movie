import { Box, Heading } from "@chakra-ui/react";
import useFetch from "../hooks/useFetch";
import SideBarItem from "./SideBarItem";
import SideBarSkeleton from "./skeletons/SideBarSkeleton";

interface SideBarProps {
  movieCategory: string;
  pageNumber: number;
  sortBy: string;
  pageTitle: string;
}
const SideBar = ({
  movieCategory,
  pageNumber,
  sortBy,
  pageTitle,
}: SideBarProps) => {
  const { isLoading, fetchedMovies, IMG_PATH } = useFetch({
    movieCategory,
    pageNumber,
    sortBy,
  });

  const sideBarSkeleton = [1, 2, 3, 4, 5, 6, 7];
  return (
    <Box paddingTop="70px">
      <Heading as="h4" size="lg" marginLeft={3}>
        {pageTitle}
      </Heading>
      {isLoading &&
        sideBarSkeleton.map((skel) => <SideBarSkeleton key={skel} />)}
      {fetchedMovies
        ?.map((movie, index) => (
          <SideBarItem
            sideBarImage={IMG_PATH + movie.poster_path}
            sideBarHeading={movie.title ? movie.title : movie.original_name}
            sideBarOverview={
              movie.overview ? movie.overview.slice(0, 20) : movie.overview
            }
            key={index}
          />
        ))
        .slice(0, 7)}
    </Box>
  );
};

export default SideBar;
