import React, { useEffect, useState } from 'react'
import ShowCatalog from './ShowCatalog';
import { Link } from 'react-router-dom';
function SearchSection({ updateMoviesCollection }) {
    const [moviesCollection, setMoviesCollection] = useState([])
    const [SearchValue, setSearchValue] = useState("");
    const [ChangeValue, setChangeValue] = useState("");

    useEffect(() => {
        fetchSearchApi()
    }, [SearchValue]);

    async function fetchSearchApi() {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${SearchValue}&api_key=a122cee36b1bc254ee171ee36a29bb98`)
            const JsonData = await response.json()
            setMoviesCollection(JsonData.results)
            updateMoviesCollection(JsonData.results);

        } catch (e) {
            console.log(e, "error occured");
        }
    }
    return (
        <div>
            <div className="MovieSearchBar">
                <form >
                    <input className='MovieSearchInput' onChange={(event) => { setChangeValue(event.target.value) }} placeholder="Search here..." type="text"></input>
                    <button className='MovieSearchButton' onClick={() => { setSearchValue(ChangeValue) }} type="submit">Search</button>
                </form>
            </div>
            <ShowCatalog moviesCollection={moviesCollection} />
        </div>
    )
}

export default SearchSection