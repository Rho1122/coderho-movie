import { Grid, GridItem, Show } from "@chakra-ui/react";

const Home = () => {
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
        <GridItem area={"slider"} bgColor="yellow">
          Slider
        </GridItem>
        <GridItem area={"main"} bgColor="purple">
          Main
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
