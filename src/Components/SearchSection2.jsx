import React, { useEffect, useState } from 'react'
import ShowCatalog from './ShowCatalog2';
// import { useNavigate } from 'react-router-dom';

function SearchSection2({ updateMoviesCollection }) {
    const [moviesCollection, setMoviesCollection] = useState([])
    const [SearchValue, setSearchValue] = useState("");
    const [ChangeValue, setChangeValue] = useState("");
    const [loaded, setloaded] = useState("no")


    useEffect(() => {
        fetchSearchApi();
    }, [SearchValue]);

    async function fetchSearchApi() {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/search/tv?query=${SearchValue}&api_key=a122cee36b1bc254ee171ee36a29bb98`)
            const JsonData = await response.json()
            setMoviesCollection(JsonData.results)
            updateMoviesCollection(JsonData.results);


        } catch (e) {
            console.log(e, "error occured");
        }
    }

    const handleSearch = (event) => {
        event.preventDefault()
        setSearchValue(ChangeValue)
        setloaded("Yes")
        //  setIsSearchComplete(true);
        // navigate('/Search');
    }
    return (
        <div>
            <div className="MovieSearchBar">
                <form onSubmit={handleSearch}>
                    <input className='MovieSearchInput' onChange={(event) => { setChangeValue(event.target.value)}} placeholder="Search here..." type="text"></input>
                    <button className='MovieSearchButton' onClick={handleSearch} type="submit">Search</button>
                </form>
            </div>

            <ShowCatalog moviesCollection={moviesCollection} loaded={loaded} />

        </div>
    )
}

export default SearchSection2