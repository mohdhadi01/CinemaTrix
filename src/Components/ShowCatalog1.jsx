import { React, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function ShowCatalog(props) {
    const moviesCollection = props.moviesCollection;
    const [clickID, setClickID] = useState()
    const loaded = props.loaded

    const navigate = useNavigate();

    useEffect(() => {
        if (loaded === "Yes") {
        }
    }, [loaded])

    return (
        <div>
            <div className="movieCardcontainer">
                {moviesCollection.map((movie) => {
                    return (
                        <>
                            <div key={movie.id} className="MovieCardPoster" onClick={() => {
                                navigate(`/Moviedetail/${movie.id}`);
                                setClickID(movie.id);
                                console.log(movie.id)
                            }}>
                                <img className='MovieCardImage' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
                                <button className="movieHoverbutton" >
                                    <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="26px"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" fill="currentColor"></path></svg>
                                </button>
                                <h2 className='movieTitleText'>{movie.title}</h2>
                                <h2 className='movieTitleText'>{movie.name}</h2>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default ShowCatalog