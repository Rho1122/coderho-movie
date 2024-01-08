import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Action from "./components/pages/Action";
import NotFound from "./components/pages/NotFound";
import MoviePage from "./components/pages/MoviePage";
import NavBar from "./components/NavBar";
import { SimpleGrid } from "@chakra-ui/react";
import Footer from "./Footer";

function App() {
  const menu = ["Home", "Movies", "TV Series"];
  return (
    <>
      <NavBar navList={menu} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Action pageTitle="" />} />
        <Route path="movie/:id/" element={<MoviePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <SimpleGrid justifyContent="center" paddingTop={5}>
        <Footer />
      </SimpleGrid>
    </>
  );
}

export default App;
