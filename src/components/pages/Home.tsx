import { Grid, GridItem, Show } from "@chakra-ui/react";
import SliderBoard from "../SliderBoard";
import { useState } from "react";
import SearchBox from "../SearchBox";
import MovieDisplayBoard from "../MovieDisplayBoard";

const Home = () => {
  const [movieCat, setMovieCat] = useState("movie");
  const [pageNo, setPageNo] = useState(1);

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
        templateColumns={{ base: "1fr", lg: "1fr 400px" }}
        gap={2}
      >
        <GridItem area={"slider"}>
          <SliderBoard
            movieCategory={movieCat}
            pageNumber={pageNo}
            sortBy="popularity"
          />
        </GridItem>
        <GridItem area={"main"}>
          <SearchBox
            onMovie={handleMovie}
            onTv={handleTv}
            onNext={handleNext}
            onPrev={handlePrev}
            pageCount={pageNo}
          />
          <MovieDisplayBoard
            movieCategory={movieCat}
            pageNumber={pageNo}
            sortBy="popularity"
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
