import React, { useEffect, useState } from 'react'
import Header from '../Header-Footer/Header';
import Footer from '../Header-Footer/Footer';
import "./DetailPage.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useParams } from 'react-router-dom';

function TVdetailPage(props) {
    const { id } = useParams();
    const [IdValue, setIdValue] = useState(72879);
    const [tvDetail, setTvDetail] = useState([]);
    const [similarTv, setSimilarTv] = useState([])  
    const [TvGenre, setTvGenre] = useState([])
    const [TvcastList,setTvCastList]=useState([]);
    const TvApi = `https://api.themoviedb.org/3/tv/${IdValue}?language=en-US&api_key=a122cee36b1bc254ee171ee36a29bb98`
    const SimilarURL2 = `https://api.themoviedb.org/3/tv/${IdValue}/similar?&api_key=a122cee36b1bc254ee171ee36a29bb98`
    const TvCastURL = `https://api.themoviedb.org/3/tv/${IdValue}/credits?&api_key=a122cee36b1bc254ee171ee36a29bb98`
   
    useEffect(() => {
        setIdValue(id);
        const fetchData = async () => {
            try {
                const response2 = await fetch(TvApi)
                const TvJsonData = await response2.json()
                setTvDetail(TvJsonData)
                setTvGenre(TvJsonData.genres)
    
                const response4 = await fetch(SimilarURL2)
                const similarTvJsonData = await response4.json()
                setSimilarTv(similarTvJsonData.results)
    
                const response5 = await fetch(TvCastURL)
                const CastTvJsonData = await response5.json()
                setTvCastList(CastTvJsonData.cast)
    
            } catch (e) {
                console.log(e, "error occured");
            }
        }        
        fetchData()
    }, [id,TvApi, SimilarURL2, TvCastURL])



    return (
        <div>
            <Header />
            <div className="detailContainer" >
                <div className="backdropPosterdiv">
                    <img className='backdropPoster' src={`https://image.tmdb.org/t/p/original/${tvDetail.backdrop_path}`} alt="" />
                </div>
                <div className="DetailDiv">
                    <img className='carouselposter' src={`https://image.tmdb.org/t/p/original/${tvDetail.poster_path}`} alt="" />
                    <div className="rightDetail">
                        <h1 className='detailTitle'>{tvDetail.name}</h1>
                        <div className="generDetail">
                            {
                                TvGenre.map((index) => {
                                    return (
                                        <>
                                            <h3 className='Genre'>{index.name}</h3>
                                        </>
                                    )
                                })
                            }
                        </div>
                        <h3 className='DetailOverview'>{tvDetail.overview}</h3>
                <div className="CastDetail">
                        <h1 className='TextCast'>Cast</h1>
                    <div className="castProfile">
                    {TvcastList.slice(0,6).map((movie)=>{
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

                    {similarTv.map((movie) => {
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
            <Footer />
        </div>
    )
}

export default TVdetailPage