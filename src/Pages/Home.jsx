import React from 'react'
import Footer from '../Header-Footer/Footer';
import Header from '../Header-Footer/Header';
import Caraousel from '../Components/Caraousel';
import TrendingMovies from '../Components/TrendingMovies';
import "./Home.css"
import TopratedMovies from '../Components/TopratedMovies';

function Home(props) {
  const movieslist = props.movieslist;
  console.log(movieslist);
  return (
    <div>

      <Header />
      <Caraousel movieslist={movieslist} />
      <TrendingMovies />
      <TopratedMovies />
      <Footer />
    </div>
  )
}

export default Home