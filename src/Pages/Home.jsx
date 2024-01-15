import React from 'react'
import Footer from '../Header-Footer/Footer';
import Header from '../Header-Footer/Header';
import Caraousel from '../Components/Caraousel';
import TrendingMovies from '../Components/TrendingMovies';
import "./Home.css"
import TopratedMovies from '../Components/TopratedMovies';
import TrendingSeries from '../Components/TrendingSeries';
import TopRatedSeries from '../Components/TopRatedSeries';

function Home(props) {
  const movieslist = props.movieslist;
  console.log(movieslist);
  return (
    <div>

      <Header />
      <Caraousel movieslist={movieslist} />
      <TrendingMovies />
      <TopratedMovies />
      <TrendingSeries />
      <TopRatedSeries />
      <Footer />
    </div>
  )
}

export default Home