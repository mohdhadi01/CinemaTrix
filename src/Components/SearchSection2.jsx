import React, { useEffect, useState } from "react";
import ShowCatalog from "./ShowCatalog2";
import { searchSeries } from "../utils/Index";
// import { useNavigate } from 'react-router-dom';

function SearchSection2({ updateMoviesCollection }) {
  const [moviesCollection, setMoviesCollection] = useState([]);
  const [SearchValue, setSearchValue] = useState("");
  const [ChangeValue, setChangeValue] = useState("");
  const [loaded, setloaded] = useState("no");

  useEffect(() => {
    async function fetchAPI() {
      try {
        const response = await searchSeries(SearchValue);
        setMoviesCollection(response.results);
      } catch (e) {
        console.log(e, "api error occured");
      }
    }
    if (SearchValue !== "") {
      fetchAPI();
    }
  }, [SearchValue]);

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchValue(ChangeValue);
    setloaded("Yes");
  };
  return (
    <div>
      <div className="MovieSearchBar">
        <form onSubmit={handleSearch}>
          <input
            className="MovieSearchInput"
            onChange={(event) => {
              setChangeValue(event.target.value);
            }}
            placeholder="Search here..."
            type="text"
          ></input>
          <button
            className="MovieSearchButton"
            onClick={handleSearch}
            type="submit"
          >
            Search
          </button>
        </form>
      </div>

      <ShowCatalog moviesCollection={moviesCollection} loaded={loaded} />
    </div>
  );
}

export default SearchSection2;
