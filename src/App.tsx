import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Action from "./components/pages/Action";
import NotFound from "./components/pages/NotFound";
import MoviePage from "./components/pages/MoviePage";
import NavBar from "./components/NavBar";

function App() {
  const menu = ["Home", "Movies", "TV Series"];
  return (
    <>
      <NavBar navList={menu} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Action pageTitle="" />} />
        <Route path="movie/:id" element={<MoviePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
