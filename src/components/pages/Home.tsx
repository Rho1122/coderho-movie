import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import SliderBoard from "../SliderBoard";
import { useState } from "react";
import SearchBox from "../SearchBox";
import MovieDisplayBoard from "../MovieDisplayBoard";
import SortMovie from "../SortMovie";

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

  const handlePrev = () => {
    setPageNo(pageNo - 1);
  };
  return (
    <>
      <Grid
        templateAreas={{
          base: `"slider" "main" "footer"`,
          lg: `"slider slider" "main aside" "footer footer"`,
        }}
        templateColumns={{ base: "1fr", lg: "1fr 350px" }}
        gap={2}
      >
        <GridItem area={"slider"}>
          <SliderBoard
            movieCategory={"movie"}
            pageNumber={1}
            sortBy={sortMovie}
          />
        </GridItem>
        <GridItem area={"main"}>
          <HStack paddingLeft={4}>
            <SortMovie onSelected={handleSortOrder} sortOrder={sortOrderList} />
            <SearchBox
              onMovie={handleMovie}
              onTv={handleTv}
              onNext={handleNext}
              onPrev={handlePrev}
              pageCount={pageNo}
            />
          </HStack>
          <MovieDisplayBoard
            movieCategory={movieCat}
            pageNumber={pageNo}
            sortBy={sortMovie}
          />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} bgColor="orange">
            Aside
          </GridItem>
        </Show>
        <GridItem area={"footer"} bgColor="grey">
          Footer
        </GridItem>
      </Grid>
    </>
  );
};

export default Home;
