import React, { useEffect, useState } from 'react'
import "./Movies.css"
import Header from '../Header-Footer/Header'
import Footer from '../Header-Footer/Footer'
import Footerbg from "../Assets/footer-bg.jpg"
function Movies() {
    const [moviesCollection, setMoviesCollection] = useState([])

    useEffect(() => {
        fetchApi();

    }, []);

    async function fetchApi() {
        try {
            const response = await fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc&api_key=a122cee36b1bc254ee171ee36a29bb98")
            const JsonData = await response.json()
            setMoviesCollection(JsonData.results)
        } catch (e) {
            console.log(e, "error occured");
        }
        console.log(moviesCollection);
    }

    return (
        <div>
            <Header />
            <div className="upperImageSection" style={{ backgroundImage: `URL(${Footerbg})` }}>
                <h2 className='MoviesTitle'>Movies</h2>
            </div>
            <div className="MoviesCardSection">
                <div className="MovieSearchBar">
                    <input className='MovieSearchInput' placeholder="Search Movies" type="text"></input>
                    <button className='MovieSearchButton' type="submit">Search</button>
                </div>
                <div className="movieCardcontainer">
                    {moviesCollection.map((movie) => {
                        return (
                            <>
                                <div className="MovieCardPoster">
                                    <img className='MovieCardImage' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
                                    <button className="movieHoverbutton" >
                                        <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="26px"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" fill="currentColor"></path></svg>
                                    </button>
                                    <h2 className='movieTitleText'>{movie.title}</h2>
                                </div>
                            </>
                        )
                    })}
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Movies