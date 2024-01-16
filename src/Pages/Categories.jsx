import React from 'react'
import Header from '../Header-Footer/Header'
import Footerbg from "../Assets/footer-bg.jpg"
import TopratedMovies from '../Components/TopratedMovies';
import TrendingSeries from '../Components/TrendingSeries';
import TopRatedSeries from '../Components/TopRatedSeries';
import TrendingMovies from '../Components/TrendingMovies';
import Footer from '../Header-Footer/Footer';

function Categories() {
  return (
    <>
        <Header />
        <div className="upperImageSection" style={{ backgroundImage: `URL(${Footerbg})` }}>
                <h2 className='MoviesTitle'>Categories</h2>
            </div>
            <div className="MoviesCardSection">
        <TrendingMovies />
        <TopratedMovies />
        <TrendingSeries />
        <TopRatedSeries />
        <Footer />
    </div>
    </>
  )
}

export default Categories