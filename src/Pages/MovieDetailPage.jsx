import React, { useEffect, useState } from "react";
import Header from "../Header-Footer/Header";
import Footer from "../Header-Footer/Footer";
import "./DetailPage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useNavigate, useParams } from "react-router-dom";
import YouTube from "react-youtube";
import LoadingPage from "../Components/LoadingPage";
import { getMovieDetail } from "../utils/Index";

function DetailPage(props) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const [MovieDetail, setMovieDetail] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [MovieGenre, setMovieGenre] = useState([]);
  const [MovieVideos, setMovieVideos] = useState([]);
  const [MoviecastList, setMovieCastList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const MovieJsonData = await getMovieDetail(id);
        setMovieDetail(MovieJsonData);
        setMovieGenre(MovieJsonData.genres);
        setSimilarMovies(MovieJsonData.similar.results);
        setMovieCastList(MovieJsonData.credits.cast);
        setMovieVideos(MovieJsonData.videos.results);
      } catch (error) {
        console.log(error, "error occurred");
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };

    fetchData();
  }, [id]);

  function renderTrailor() {
    const trailer = MovieVideos.find((vid) => vid.name === "Official Trailer");
    return trailer ? (
      <>
        {" "}
        <h1 className="videoName">{trailer.name}</h1>
        <YouTube videoId={trailer.key} style={{ marginTop: "20px" }} />
      </>
    ) : null;
  }

  if (loading) {
    return (
      <div>
        <Header />
        <LoadingPage />
      </div>
    );
  }
  return (
    <div>
      <Header />
      <div className="detailContainer">
        <div className="backdropPosterdiv">
          {MovieDetail?.backdrop_path ? (
            <>
              <img
                className="backdropPoster"
                src={`https://image.tmdb.org/t/p/original/${MovieDetail.backdrop_path}`}
                alt=""
              />
            </>
          ) : null}
        </div>

        <div className="DetailDiv">
          {MovieDetail?.poster_path ? (
            <>
              <img
                className="carouselposter"
                src={`https://image.tmdb.org/t/p/original/${MovieDetail.poster_path}`}
                alt=""
              />
            </>
          ) : null}
          <div className="rightDetail">
            <h1 className="detailTitle">
              {MovieDetail ? <>{MovieDetail.original_title}</> : null}
            </h1>

            <div className="generDetail">
              {MovieGenre ? (
                <>
                  {" "}
                  {MovieGenre.slice(0, 3).map((index) => {
                    return (
                      <>
                        <h3 className="Genre">{index.name}</h3>
                      </>
                    );
                  })}
                </>
              ) : null}
            </div>
            <h3 className="DetailOverview">
              {MovieDetail?.overview ? <>{MovieDetail.overview}</> : null}
            </h3>
            <div className="CastDetail">
              <h1 className="TextCast">Cast</h1>
              <div className="castProfile">
                {MoviecastList ? (
                  <>
                    {" "}
                    {MoviecastList.slice(0, 5).map((movie) => {
                      return (
                        <>
                          <div className="individualCast">
                            <img
                              className="CastImg"
                              src={`https://image.tmdb.org/t/p/w500/${movie.profile_path}`}
                              alt=""
                            />
                            <h3 className="CastName">{movie.name}</h3>
                          </div>
                        </>
                      );
                    })}
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="VideosDiv">
        {MovieVideos ? <> {renderTrailor()}</> : null}
      </div>

      <div className="SimilarMovies">
        {similarMovies ? (
          <>
            {" "}
            <h1 className="TextSimilar">Similar Collection</h1>
          </>
        ) : null}
        <Swiper
          style={{ cursor: "grab" }}
          spaceBetween={20}
          // slidesPerView={6}
          breakpoints={{
            168: {
              slidesPerView: 1.5,
            },
            368: {
              slidesPerView: 2.5,
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
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {similarMovies ? (
            <>
              {" "}
              {similarMovies.map((movie) => {
                return (
                  <>
                    <SwiperSlide>
                      <div
                        className="MovieCardPoster"
                        onClick={() => {
                          navigate(`/moviedetail/${movie.id}`);
                          window.scroll({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                          });
                        }}
                      >
                        <img
                          className="MovieCardImage  TrendingImage"
                          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
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
                        <h2 className="movieTitleText">{movie.title}</h2>
                      </div>
                    </SwiperSlide>
                  </>
                );
              })}
            </>
          ) : null}
        </Swiper>
      </div>
      <Footer />
    </div>
  );
}

export default DetailPage;
