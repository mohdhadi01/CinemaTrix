import React from "react";
import { useState, useEffect } from "react";
import "./TrendingMovies.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getTrendingSeries } from "../utils/Index";

function TrendingSeries() {
  const [TrendingSerieslist, setTrendingSeriesList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchAPI() {
      try {
        const response = await getTrendingSeries(1);
        setTrendingSeriesList(response.results);
      } catch (e) {
        console.log(e, "api error occured");
      }
    }
    fetchAPI();
  }, []);

  return (
    <div>
      <div className="TrendSection">
        <h1>Trending Tv Series</h1>{" "}
        <Link to={"/Series"} onClick={() => window.screenTop()}>
          <h2 className="viewbutton">View more</h2>
        </Link>
      </div>
      <div className="TrendingmovieCardcontainer">
        <Swiper
          style={{ cursor: "grab" }}
          spaceBetween={20}
          //   slidesPerView={6}
          breakpoints={{
            168: {
              slidesPerView: 1.5,
            },
            368: {
              slidesPerView: 2.3,
            },
            576: {
              slidesPerView: 2.5,
            },
            768: {
              slidesPerView: 3.5,
            },
            968: {
              slidesPerView: 4.5,
            },
            1168: {
              slidesPerView: 5.5,
            },
            1368: {
              slidesPerView: 6.5,
            },
          }}
          onSlideChange={() => ""}
          onSwiper={(swiper) => ""}
        >
          {TrendingSerieslist.map((movie) => {
            return (
              <>
                <SwiperSlide>
                  <div
                    className="MovieCardPoster"
                    onClick={() => {
                      navigate(`/Tvdetail/${movie.id}`);
                      // setClickID(movie.id);
                      // console.log(movie.id)
                    }}
                  >
                    <img
                      className="MovieCardImage  TrendingImage"
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt=""
                    />
                    <button className="movieHoverbutton">
                      <svg
                        viewBox="0 0 448 512"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        width="26px"
                      >
                        <path
                          d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>
                    <h2 className="movieTitleText">{movie.name}</h2>
                  </div>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
export default TrendingSeries;
