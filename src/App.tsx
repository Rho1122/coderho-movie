import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Action from "./components/pages/Action";
import NotFound from "./components/pages/NotFound";
import MoviePage from "./components/pages/MoviePage";
import NavBar from "./components/NavBar";
import { Grid } from "@chakra-ui/react";

function App() {
  const menu = [
    "Home",
    "Action",
    "Adventure",
    "Sci-Fiction",
    "Comedy",
    "Anime",
    "TV Series",
  ];
  return (
    <>
      <Grid>
        <NavBar navList={menu} />
      </Grid>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="action" element={<Action />} />
        <Route path="movie/:id" element={<MoviePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
