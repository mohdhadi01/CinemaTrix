import React from 'react'
import "./Caraousel.css"
import { Carousel } from 'antd';

function Caraousel(props) {
  const movieslist = props.movieslist.slice(0, 5);
  
  
  const contentStyle = {
    height: '100%',
    width:"100%",
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };



  return (
    <div>
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