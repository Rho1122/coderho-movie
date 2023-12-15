import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
  const movies = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      <p className="btn btn-danger p-2">home page</p>
      <Box>
        {movies.map((movie) => (
          <Link to={`/movie/${movie}`} key={movie}>
            <div className="btn btn-primary m-2 px-5" key={movie}>
              {movie}
            </div>
          </Link>
        ))}
      </Box>
    </div>
  );
};

export default Home;
