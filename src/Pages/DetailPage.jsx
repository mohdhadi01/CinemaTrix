import React, { useEffect, useState } from 'react'
import Header from '../Header-Footer/Header';
import Footer from '../Header-Footer/Footer';
import "./DetailPage.css"

function DetailPage(props) {
    const [IdValue, setIdValue]= useState(572802);
    const[MovieDetail,setMovieDetail]=useState([]);
    const[tvDetail,setTvDetail]=useState([]);
    const MovieApi = `https://api.themoviedb.org/3/movie/${IdValue}?language=en-US&api_key=a122cee36b1bc254ee171ee36a29bb98`
    const TvApi= `https://api.themoviedb.org/3/tv/${IdValue}?language=en-US&api_key=a122cee36b1bc254ee171ee36a29bb98`
 
    useEffect(()=>{
        fetchApi()
    },[IdValue])

    console.log(MovieDetail)

    async function fetchApi() {
        try {
            const response1 = await fetch(MovieApi)
            const response2 = await fetch(TvApi)
            const MovieJsonData = await response1.json()
            const TvJsonData = await response2.json()
            setMovieDetail(MovieJsonData)
            setTvDetail(TvJsonData)
        } catch (e) {
            console.log(e, "error occured");
        }
    }
    return (
    <div>
        <Header/>
        <div className="detailContainer" >
            <div className="backdropPoster">
            <img src={`https://image.tmdb.org/t/p/original/${MovieDetail.backdrop_path}`} alt="" />
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default DetailPage