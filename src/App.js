import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Login & Signup/Login";
import SignUp from "./Login & Signup/SignUp";
import Home from "./Pages/Home";
import { useEffect, useState } from "react";

function App() {
  // const APIKey="a122cee36b1bc254ee171ee36a29bb98";
  const [movieslist, setMoviesList] = useState([]);

  useEffect(() => {
    fetchAPI();
  }, []);

  async function fetchAPI() {
    try {
      // https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=a122cee36b1bc254ee171ee36a29bb98
      // const response = await fetch(`https://api.themoviedb.org/3/movie/157336?api_key=${APIKey}&append_to_response=videos,images`)
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=Avengers&api_key=a122cee36b1bc254ee171ee36a29bb98`
      );
      const jsonData = await response.json();
      setMoviesList(jsonData.results);
      // console.log(movieslist);
    } catch (e) {
      console.log(e, "api error occured");
    }
  }

  return (
    <div>
      <Routes>
        <Route path="/Home" element={<Home movieslist={movieslist} />}></Route>
        <Route path="/Signup" element={<SignUp />}></Route>
        <Route path="/Login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
