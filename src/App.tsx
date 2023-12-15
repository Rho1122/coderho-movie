import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Action from "./components/pages/Action";
import NotFound from "./components/pages/NotFound";
import MoviePage from "./components/pages/MoviePage";

function App() {
  return (
    <>
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
