import React, { useEffect, useState } from 'react'
import Header from '../Header-Footer/Header';
import Footer from '../Header-Footer/Footer';
import "./DetailPage.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useParams } from 'react-router-dom';
import { Skeleton } from 'antd';

function DetailPage(props) {
    // 609681
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();
    const [IdValue, setIdValue] = useState(24551);
    const [MovieDetail, setMovieDetail] = useState([]);
    const [similarMovies, setSimilarMovies] = useState([]);
    const [MovieGenre, setMovieGenre] = useState([])
    const [MoviecastList,setMovieCastList]=useState([]);
    const MovieApi = `https://api.themoviedb.org/3/movie/${IdValue}?language=en-US&api_key=a122cee36b1bc254ee171ee36a29bb98`
    const SimilarURL1 = `https://api.themoviedb.org/3/movie/${IdValue}/similar?&api_key=a122cee36b1bc254ee171ee36a29bb98`
    const MovieCastURL = `https://api.themoviedb.org/3/movie/${IdValue}/credits?&api_key=a122cee36b1bc254ee171ee36a29bb98`
    useEffect(() => {
        setIdValue(id);
        const fetchData = async () => {
          try {
            const response1 = await fetch(MovieApi);
            const MovieJsonData = await response1.json();
            setMovieDetail(MovieJsonData);
            setMovieGenre(MovieJsonData.genres);
    
            const response3 = await fetch(SimilarURL1);
            const SimilarJsonData = await response3.json();
            setSimilarMovies(SimilarJsonData.results);
    
            const response5 = await fetch(MovieCastURL);
            const CastJsonData = await response5.json();
            setMovieCastList(CastJsonData.cast);
    
          } catch (error) {
            console.log(error, "error occurred");
          }  finally {
            setIsLoading(false);
        }
        };
    
        fetchData();
      }, [id, MovieApi, SimilarURL1, MovieCastURL]);

    return (
        <div>
            <Header />
            {isLoading ? (
                <Skeleton active />
            ) : (
                <>
            <div className="detailContainer" >
                <div className="backdropPosterdiv">
                    <img className='backdropPoster' src={`https://image.tmdb.org/t/p/original/${MovieDetail.backdrop_path}`} alt="" />
                </div>
                <div className="DetailDiv">
                    <img className='carouselposter' src={`https://image.tmdb.org/t/p/original/${MovieDetail.poster_path}`} alt="" />
                    <div className="rightDetail">
                        <h1 className='detailTitle'>{MovieDetail.original_title}</h1>
                        <div className="generDetail">
                            {
                                MovieGenre.slice(0,3).map((index) => {
                                    return (
                                        <>
                                            <h3 className='Genre'>{index.name}</h3>
                                        </>
                                    )
                                })
                            }
                        </div>
                        <h3 className='DetailOverview'>{MovieDetail.overview}</h3>
                        <div className="CastDetail">
                        <h1 className='TextCast'>Cast</h1>
                    <div className="castProfile">
                    {MoviecastList.slice(0,6).map((movie)=>{
                        return(
                            <>
                            <div className="individualCast">
                            <img className='CastImg' src={`https://image.tmdb.org/t/p/original/${movie.profile_path}`} alt="" />
                            <h3 className='CastName'>{movie.name}</h3>
                            </div>
                            </>
                        )
                    })}
                    </div>
                </div>
                    </div>

                </div>
            </div>
            <div className="SimilarMovies">
                <h1 className='TextSimilar'>Similar Collection</h1>
                <Swiper style={{ cursor: "grab" }}
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
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {similarMovies.map((movie) => {
                        return (
                            <>

                                <SwiperSlide >
                                    <div className="MovieCardPoster">
                                        <img className='MovieCardImage  TrendingImage' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
                                        <button className="movieHoverbutton" >
                                            <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="26px"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" fill="currentColor"></path></svg>
                                        </button>
                                        <h2 className='movieTitleText'>{movie.name}</h2>
                                        <h2 className='movieTitleText'>{movie.title}</h2>
                                    </div>
                                </SwiperSlide>
                            </>
                        )
                    })}
                </Swiper>


            </div>
            </>
            )}
            <Footer />
        </div>
    )
}

export default DetailPage