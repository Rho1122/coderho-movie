import {
  A11y,
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
} from "swiper/modules";
import useFetch from "../hooks/useFetch";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Link } from "react-router-dom";

interface SliderBoardProps {
  movieCategory: string;
  pageNumber: number;
}

const SliderBoard = ({ movieCategory, pageNumber }: SliderBoardProps) => {
  const { fetchedMovies, IMG_PATH } = useFetch({
    movieCategory,
    pageNumber,
  });

  return (
    <>
      <div>
        <Swiper
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
          loop={true}
          navigation
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="mySwiper"
        >
          {fetchedMovies?.map((movies, index) => (
            <SwiperSlide
              virtualIndex={index}
              key={index}
              className="swiper-cover"
            >
              <img
                src={IMG_PATH + movies.backdrop_path}
                alt={movies.title}
                key={index}
                className="slide-image"
              />
              <div className="info-box">
                <h1 className="slide-title">{movies.title}</h1>

                <div className="slider-description-icon">
                  <button type="submit" className="btn btn-warning btn-sm">
                    HD
                  </button>
                  <span className="mx-3">
                    <i className="fa-solid fa-star text-warning"></i>
                    {movies.vote_average}
                  </span>
                  <span>
                    <i className="fa-regular fa-clock"></i>
                    {movies.release_date.slice(0, 4)}
                  </span>

                  <span className="mx-3">{movies.adult ? "18+" : "PG"}</span>
                </div>
                <p>
                  {movies.overview
                    ? movies.overview.slice(0, 150) + "..."
                    : movies.overview}
                </p>
                <div className="button-slide d-flex">
                  <div className="slider-button btn btn-primary">
                    <Link to={`movie/${movies.id}`}>
                      <i className="fa-regular fa-circle-play"></i> Watch Now
                    </Link>
                  </div>

                  <div className="slider-button btn btn-outline-primary mx-2">
                    <Link to={`movie/${movies.id}`}>Add a favorite</Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default SliderBoard;
