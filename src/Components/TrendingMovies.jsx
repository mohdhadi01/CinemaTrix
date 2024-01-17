import React from 'react'
import { useState, useEffect } from 'react';
import "./TrendingMovies.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';

function TrendingMovies() {
    const [Trendingmovieslist, setTrendingMoviesList] = useState([]);


    useEffect(() => {
        fetchAPI();
    }, []);

    async function fetchAPI() {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=a122cee36b1bc254ee171ee36a29bb98`
            );
            const jsonData = await response.json();
            setTrendingMoviesList(jsonData.results);
        } catch (e) {
            console.log(e, "api error occured");
        }
    }

    return (
        <div>
            <div className="TrendSection"><h1>Trending Movies</h1> <Link to={"/Movies"}><h2 className='viewbutton'>View more</h2></Link></div>
            <div className="TrendingmovieCardcontainer">
                
                <Swiper style={{cursor:"grab"}}
                    spaceBetween={50}
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
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {Trendingmovieslist.map((movie) => {
                        return (
                            <>

                                    <SwiperSlide>
                                <div className="MovieCardPoster">
                                        <img className='MovieCardImage  TrendingImage' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
                                        <button className="movieHoverbutton" >
                                            <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="26px"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" fill="currentColor"></path></svg>
                                        </button>
                                        <h2 className='movieTitleText'>{movie.title}</h2>
                                </div>
                                    </SwiperSlide>
                            </>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    )
}

export default TrendingMovies