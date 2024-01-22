import React, { useEffect, useState } from 'react'
import Header from '../Header-Footer/Header';
import Footer from '../Header-Footer/Footer';
import "./DetailPage.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useNavigate, useParams } from 'react-router-dom';
import YouTube from 'react-youtube';
import LoadingPage from "../Components/LoadingPage"


function TVdetailPage(props) {
    // 59947
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const [IdValue, setIdValue] = useState();
    const [tvDetail, setTvDetail] = useState([]);
    const [similarTv, setSimilarTv] = useState([])
    const [TvGenre, setTvGenre] = useState([])
    const [TvVideos, setTvVideos] = useState([]);
    const [TvcastList, setTvCastList] = useState([]);
    const TvApi = `https://api.themoviedb.org/3/tv/${IdValue}?language=en-US&api_key=a122cee36b1bc254ee171ee36a29bb98&append_to_response=credits,videos,similar`

    useEffect(() => {
        setIdValue(id);
        const fetchData = async () => {
            try {
                const response2 = await fetch(TvApi)
                const TvJsonData = await response2.json()
                setTvDetail(TvJsonData)
                setTvGenre(TvJsonData.genres)
                setSimilarTv(TvJsonData.similar.results)
                setTvCastList(TvJsonData.credits.cast)
                setTvVideos(TvJsonData.videos.results)
            } catch (e) {
                console.log(e, "error occured");
            } finally {
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            }
        }
        fetchData()
    }, [id, TvApi, tvDetail])

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
            <div className="detailContainer" >

                <div className="backdropPosterdiv">
                    {tvDetail?.backdrop_path ? <>   <img className='backdropPoster' src={`https://image.tmdb.org/t/p/original/${tvDetail.backdrop_path}`} alt="" />
                    </> : null}   </div>
                <div className="DetailDiv">
                    {tvDetail?.poster_path ? <>
                        <img className='carouselposter' src={`https://image.tmdb.org/t/p/original/${tvDetail.poster_path}`} alt="" />
                    </> : null}
                    <div className="rightDetail">
                        <h1 className='detailTitle'>{tvDetail.name}</h1>
                        {TvGenre ? <>
                            <div className="generDetail">
                                {
                                    TvGenre.slice(0, 3).map((index) => {
                                        return (
                                            <>
                                                <h3 className='Genre'>{index.name}</h3>
                                            </>
                                        )
                                    })
                                }
                            </div></> : null}
                        {tvDetail?.overview ? <> <h3 className='DetailOverview'>{tvDetail.overview}</h3></> : null}
                        <div className="CastDetail">
                            <h1 className='TextCast'>Cast</h1>
                            <div className="castProfile">
                                {TvcastList ? <> {TvcastList.slice(0, 6).map((movie) => {
                                    return (
                                        <>
                                            <div className="individualCast">
                                                <img className='CastImg' src={`https://image.tmdb.org/t/p/original/${movie.profile_path}`} alt="" />
                                                <h3 className='CastName'>{movie.name}</h3>
                                            </div>
                                        </>
                                    )
                                })}</> : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="VideosDiv" >
                {TvVideos ? <> {
                    TvVideos.slice(0, 1).map((trailer) => {
                        return (<>
                            <h1 className='videoName'>{trailer.name}</h1>

                            <YouTube
                                videoId={trailer.key}
                                style={{ marginTop: "20px" }}
                                iframeClassName={"200vw"}
                            />
                        </>)
                    })
                }</> : null}
            </div>

            <div className="SimilarMovies">
                {similarTv ? <> <h1 className='TextSimilar'>Similar Collection</h1></> : null}
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

                    {similarTv ? <>   {similarTv.map((movie) => {
                        return (
                            <>

                                <SwiperSlide >
                                    <div className="MovieCardPoster" onClick={() => {
                                        navigate(`/Tvdetail/${movie.id}`)
                                        window.scroll({
                                            top: 0,
                                            left: 0,
                                            behavior: 'smooth'
                                        })
                                    }}>
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
                    })}</> : null}
                </Swiper>

            </div>
            <Footer />
        </div>
    )
}

export default TVdetailPage