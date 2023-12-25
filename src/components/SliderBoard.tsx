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
      <div className="swiper-cover">
        <Swiper
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
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
            <SwiperSlide virtualIndex={index} key={index} className="swippers">
              <img
                src={IMG_PATH + movies.backdrop_path}
                alt={movies.title}
                key={index}
                className="slide-image"
              />
              <div className="info-box">
                <h1 className="slide-title shadow">{movies.title}</h1>
                <p>
                  {movies.overview
                    ? movies.overview.slice(0, 150) + "..."
                    : movies.overview}
                </p>
                <div className="slider-button btn btn-primary">
                  <Link to={`movie/${movies.id}`}>
                    <i className="fa-regular fa-circle-play"></i> Watch Now
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="slider-shadow"></div>
      </div>
    </>
  );
};

export default SliderBoard;
