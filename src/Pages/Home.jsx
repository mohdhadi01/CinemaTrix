import React, { useState } from "react";
import Footer from "../Header-Footer/Footer";
import Header from "../Header-Footer/Header";
import Caraousel from "../Components/Caraousel";
import TrendingMovies from "../Components/TrendingMovies";
import "./Home.css";
import TopratedMovies from "../Components/TopratedMovies";
import TrendingSeries from "../Components/TrendingSeries";
import TopRatedSeries from "../Components/TopRatedSeries";
import LoadingPage from "../Components/LoadingPage";

function Home() {
  return (
    <div>
      <Header />
      <Caraousel />
      <TrendingMovies />
      <TopratedMovies />
      <TrendingSeries />
      <TopRatedSeries />
      <Footer />
    </div>
  );
}

export default Home;
