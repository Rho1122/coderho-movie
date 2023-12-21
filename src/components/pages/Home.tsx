import { Box, SimpleGrid } from "@chakra-ui/react";
import SliderBoard from "../SliderBoard";
import { useState } from "react";
import SearchBox from "../SearchBox";
import MovieDisplayBoard from "../MovieDisplayBoard";
import SortMovie from "../SortMovie";
import SideBar from "../SideBar";

const Home = () => {
  const [movieCat, setMovieCat] = useState("movie");
  const [pageNo, setPageNo] = useState(1);
  const [sortMovie, setSortMovie] = useState("popularity");

  const sortOrderList = [
    "popularity",
    "primary_release_date",
    "vote_average",
    "vote_count",
    "revenue",
    "name",
  ];

  const handleSortOrder = (sortOrderList: string) => {
    setSortMovie(sortOrderList);
  };

  const handleMovie = () => {
    setMovieCat("movie");
  };

  const handleTv = () => {
    setMovieCat("tv");
  };

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

  return (
    <>
      <SimpleGrid>
        <SliderBoard
          movieCategory={movieCat}
          pageNumber={pageNo}
          sortBy={sortMovie}
        />
      </SimpleGrid>

      <SimpleGrid paddingX={3} paddingTop={2}>
        <SortMovie onSelected={handleSortOrder} sortOrder={sortOrderList} />
        <SearchBox
          onMovie={handleMovie}
          onTv={handleTv}
          onNext={handleNext}
          pageCount={pageNo}
        />
      </SimpleGrid>
      <SimpleGrid>
        <MovieDisplayBoard
          movieCategory={movieCat}
          pageNumber={pageNo}
          sortBy={sortMovie}
        />
        <Box>
          <SideBar
            movieCategory="movie"
            pageNumber={1}
            sortBy="popularity"
            pageTitle="Latest Movies"
          />

          <SideBar
            movieCategory="tv"
            pageNumber={1}
            sortBy="popularity"
            pageTitle="TV Series"
          />
        </Box>
      </SimpleGrid>

      <SimpleGrid>Footer</SimpleGrid>
    </>
  );
};

export default Home;
