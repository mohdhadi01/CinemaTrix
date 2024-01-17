import {React,useState} from 'react'
import Header from '../Header-Footer/Header'
import Footer from '../Header-Footer/Footer'
import Footerbg from "../Assets/footer-bg.jpg"
import ShowCatalog from '../Components/ShowCatalog'
import SearchSection from '../Components/SearchSection'

function SearchPage() {
    const [moviesCollection, setMoviesCollection] = useState([]);
    const updateMoviesCollection = (movies) => {  
        setMoviesCollection(movies);
  };
  return (
    <>
        <Header />
            <div className="upperImageSection" style={{ backgroundImage: `URL(${Footerbg})` }}>
                <h2 className='MoviesTitle'>Search</h2>
            </div>
            <div className="MoviesCardSection">
            <SearchSection updateMoviesCollection={updateMoviesCollection} />
            <ShowCatalog moviesCollection={moviesCollection} />
            </div>
            <Footer />
    </>
  )
}

export default SearchPage