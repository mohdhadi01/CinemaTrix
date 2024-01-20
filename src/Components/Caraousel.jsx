import { useEffect, useState } from "react";
import "./Caraousel.css"
import { Carousel } from 'antd';


function Caraousel() {
  const [mymovieslist, setMoviesList] = useState([]);
  const movieslist = mymovieslist.slice(0, 5);



  useEffect(() => {
    async function fetchAPI() {
      try {
        const response = await fetch(
              `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=a122cee36b1bc254ee171ee36a29bb98`
          );
        const jsonData = await response.json();
        setMoviesList(jsonData.results);
      } catch (e) {
        console.log(e, "api error occured");
      }
    }
    fetchAPI();
  }, []);

  
  
  const contentStyle = {
    height: '100%',
    width:"100%",
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };



  return (
    <div className='Carousel-DIV'>
      <Carousel autoplay>
        {movieslist.map((movie) => {
        return (
          <>
        
            <img className='carouselimage' src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} style={contentStyle}  alt={movie.title} />
            <div className="caraouselDetail">
              <div className="flexCarouselText">
              <div className="carouselTitleDiv">
              <h1 className='carouselTitle'>{movie.title}</h1>
              </div>
              <div className="carouselOverview"><h5>{movie.overview}</h5></div>
              <div className="CarouselRating">
              <h2> ⭐ {movie.vote_average} / 10</h2>
              </div>
              <div className="carouselButtons">
              <button className='carouselButton carouselButton1'>WATCH NOW</button>
              </div>
              </div>
              <img className='carouselposter' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}  alt={movie.title} />
            </div>
          </>
        )
      })}


    </Carousel>
    </div>
  )
}

export default Caraousel