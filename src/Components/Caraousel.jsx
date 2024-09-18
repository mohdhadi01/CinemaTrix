import { useEffect, useState } from "react";
import "./Caraousel.css";
import { Carousel } from "antd";
import { useNavigate } from "react-router-dom";
import { getCarousel } from "../utils/Index";
import Header from "../Header-Footer/Header";
import LoadingPage from "./LoadingPage";

function Caraousel() {
  const [mymovieslist, setMoviesList] = useState([]);

  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAPI() {
      setLoading(true);
      try {
        const response = await getCarousel(1);
        setMoviesList(response.data);
      } catch (e) {
        console.log(e, "api error occured");
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    }
    fetchAPI();
  }, []);

  if (loading) {
    return (
      <div>
        <Header />
        <LoadingPage />
      </div>
    );
  }
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
                    <h2> ⭐ {movie.rating} / 10</h2>
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
