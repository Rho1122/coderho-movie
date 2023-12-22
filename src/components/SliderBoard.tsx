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
  const { fetchedMovies, IMG_PATH } = useFetch({
    movieCategory,
    pageNumber,
    sortBy,
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
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="mySwiper"
        >
          {fetchedMovies?.map((movies, index) => (
            <SwiperSlide virtualIndex={index} key={index}>
              <img
                src={IMG_PATH + movies.backdrop_path}
                alt={movies.title}
                key={index}
                className="slide-image"
              />
              <div className="info-box">
                <h1 className="slide-title">{movies.title}</h1>
                <p>{movies.overview}</p>
                <button className="btn btn-primary">Watch Now</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default SliderBoard;
