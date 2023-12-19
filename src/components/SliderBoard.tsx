import useFetch from "../hooks/useFetch";
import SliderSkeleton from "./skeletons/SliderSkeleton";

interface SliderBoardProps {
  movieCategory: string;
  pageNumber: number;
  sortBy: string;
}

const SliderBoard = ({
  movieCategory,
  pageNumber,
  sortBy,
}: SliderBoardProps) => {
  const { isLoading, fetchedMovies, IMG_PATH } = useFetch({
    movieCategory,
    pageNumber,
    sortBy,
  });

  const SliderSkel = [1, 2, 3];

  return (
    <div id="carouselExampleCaptions" className="carousel slide w-100">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        {isLoading && SliderSkel.map((skel) => <SliderSkeleton key={skel} />)}
        {fetchedMovies?.map((movie, index) => (
          <div
            className={index === 0 ? "carousel-item active" : "carousel-item"}
            key={index}
          >
            <img
              src={IMG_PATH + movie.backdrop_path}
              className="slider-image d-block w-100"
              alt="..."
            />
            <div className="slider-caption carousel-caption d-none d-md-block">
              <h3 className="fs-1 text-uppercase justify-content=left">
                {movie.title ? movie.title : movie.original_name}
              </h3>
              <div className="slider-details d-flex">
                <button className="btn btn-primary">HD</button>
                <div className=" slider-details text-center p-2">
                  <i className="slider-details fa-solid fa-star"></i>
                  <span className="py-2">{movie.vote_average}</span>
                </div>{" "}
                <div className="slider-details p-2">
                  {movie.release_date
                    ? movie.release_date.slice(0, 4)
                    : movie.release_date}
                </div>
              </div>
              <p>{movie.overview}</p>
              <button className="btn btn-primary p-3">Watch Now</button>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default SliderBoard;
