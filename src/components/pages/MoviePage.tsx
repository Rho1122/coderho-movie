import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const MoviePage = () => {
  return (
    <div>
      <p className="btn btn-danger">Single Movie page</p>
      <Box>
        <Link to="/">
          <div className="btn btn-primary">Return to movies</div>
        </Link>
      </Box>
    </div>
  );
};

export default MoviePage;
