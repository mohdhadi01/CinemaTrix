import React ,{useState} from 'react'
import Footer from '../Header-Footer/Footer';
import Header from '../Header-Footer/Header';
import Caraousel from '../Components/Caraousel';
import TrendingMovies from '../Components/TrendingMovies';
import "./Home.css"
import TopratedMovies from '../Components/TopratedMovies';
import TrendingSeries from '../Components/TrendingSeries';
import TopRatedSeries from '../Components/TopRatedSeries';
import LoadingPage from "../Components/LoadingPage";

function Home(props) {
  const movieslist = props.movieslist;
  const [loading, setLoading] = useState(true);
  
    setTimeout(() => {
        setLoading(false);
    }, 2500);

  if (loading) {
    return (
        <div>
          <Header/>
            <LoadingPage/>
        </div>
    );
}
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