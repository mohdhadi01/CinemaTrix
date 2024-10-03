import { useEffect, useState } from "react";
import "./Caraousel.css";
import { Carousel, Empty } from "antd";
import { useNavigate } from "react-router-dom";
import { getCarousel } from "../utils/Index";
import Header from "../Header-Footer/Header";
import LoadingPage from "./LoadingPage";

function Caraousel({ loading, setLoading }) {
  const [mymovieslist, setMoviesList] = useState([]);
  const navigate = useNavigate();

  async function fetchAPI() {
    setLoading(true);
    try {
      const response = await getCarousel(1);
      setTimeout(() => {
        setMoviesList(response.results);
        setLoading(false);
      }, 2000);
    } catch (e) {
      setTimeout(() => {
        console.log(e, "api error occured");
        setLoading(false);
      }, 2000);
    } finally {
    }
  }
  useEffect(() => {
    if (mymovieslist.length < 1) {
      fetchAPI();
    }
  }, [mymovieslist]);

  return (
    <div className="Carousel-DIV">
      <Carousel autoplay>
        {mymovieslist?.slice(1, 6)?.map((movie) => {
          return (
            <>
              <div className="carouselImage">
                <img
                  className="carouselimage"
                  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  alt={movie.title}
                />
              </div>
              <div className="caraouselDetail">
                <div className="flexCarouselText">
                  <div className="carouselTitleDiv">
                    <h1 className="carouselTitle">{movie.title}</h1>
                  </div>
                  <div className="carouselOverview">
                    <h5>{movie.overview}</h5>
                  </div>
                  <div className="CarouselRating">
                    <h2> ⭐ {movie.vote_average} / 10</h2>
                  </div>
                  <div className="carouselButtons">
                    <button
                      className="carouselButton carouselButton1"
                      onClick={() => {
                        navigate(`/movieDetail/${movie.id}`);
                      }}
                    >
                      WATCH NOW
                    </button>
                  </div>
                </div>
                <div className="caraouselPoster">
                  <img
                    className="carouselposter"
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                  />
                </div>
              </div>
            </>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Caraousel;
