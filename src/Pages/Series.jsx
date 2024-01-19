import React, { useEffect, useState } from 'react'
import "./Movies.css"
import Header from '../Header-Footer/Header'
import Footer from '../Header-Footer/Footer'
import Footerbg from "../Assets/footer-bg.jpg"
import ShowCatalog from '../Components/ShowCatalog2'
import SearchSection from '../Components/SearchSection2'

function Series() {
    const [SeriesCollection, setSeriesCollection] = useState([])
    const [pageNumber, setPageNumber] = useState(1)

    useEffect(() => {
        fetchApi();

    }, [pageNumber]);
    function NextClick() {
        setPageNumber(pageNumber + 1)
        ScrollTop()
    }
    function PrevClick() {
        if (pageNumber > 1) {
            setPageNumber(pageNumber - 1)
        } ScrollTop()
    }
    const ScrollTop = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    async function fetchApi() {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=true&language=en-US&page=${pageNumber}&sort_by=popularity.desc&api_key=a122cee36b1bc254ee171ee36a29bb98`)
            const JsonData = await response.json()
            setSeriesCollection(JsonData.results)
        } catch (e) {
            console.log(e, "error occured");
        }
    }

    return (
        <div>
            <Header />
            <div className="upperImageSection" style={{ backgroundImage: `URL(${Footerbg})` }}>
                <h2 className='MoviesTitle'>TV Series</h2>
            </div>
            <div className="MoviesCardSection">
                <SearchSection />
                <ShowCatalog moviesCollection={SeriesCollection} seriespassed={"true"} />
                <div className="Next-Prev">
                    <button className="Prev-btn page-btn" onClick={PrevClick}>
                        <svg className='prev-svg' viewBox="0 0 320 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z">
                            </path>
                        </svg>
                        <span>Prev</span>
                    </button>
                    <button className="Next-btn page-btn" onClick={NextClick}>
                        <span>Next</span>
                        <svg viewBox="0 0 320 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Series