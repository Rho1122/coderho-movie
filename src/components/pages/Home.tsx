import { Grid, GridItem, Show, SimpleGrid } from "@chakra-ui/react";
import SliderBoard from "../SliderBoard";
import { useState } from "react";
import SearchBox from "../SearchBox";
import MovieDisplayBoard from "../MovieDisplayBoard";

import SideBar from "../SideBar";

const Home = () => {
  const [movieCat, setMovieCat] = useState("movie");
  const [pageNo, setPageNo] = useState(1);

  const handleMovie = () => {
    setMovieCat("movie");
    setPageNo(1);
  };

  const handleTv = () => {
    setMovieCat("tv");
    setPageNo(1);
  };

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

  const handlePrev = () => {
    setPageNo(pageNo === 1 ? 1 : pageNo - 1);
  };

  return (
    <>
      <SliderBoard movieCategory={"movie"} pageNumber={1} />

      <SimpleGrid paddingX={3} paddingTop={2}>
        <SearchBox
          onMovie={handleMovie}
          onTv={handleTv}
          onNext={handleNext}
          onPrev={handlePrev}
          pageCount={pageNo}
        />
      </SimpleGrid>

      <Grid
        templateAreas={{ base: ` "main"`, lg: `"main aside"` }}
        templateColumns={{ base: "1fr", lg: "1fr 300px" }}
        gap={4}
      >
        <GridItem area={"main"}>
          <MovieDisplayBoard
            movieCategory={movieCat}
            pageNumber={pageNo}
            sectionTitle={movieCat.toLocaleUpperCase()}
          />
        </GridItem>

        <Show above={"lg"}>
          <GridItem area={"aside"}>
            <SideBar
              movieCategory="movie"
              pageNumber={1}
              pageTitle="Latest Movies"
            />
            <SideBar movieCategory="tv" pageNumber={1} pageTitle="TV Series" />
          </GridItem>
        </Show>
      </Grid>

      <SimpleGrid>Footer</SimpleGrid>
    </>
  );
};

export default Home;
