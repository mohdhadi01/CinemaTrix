import { Route, Routes} from "react-router-dom";
import "./App.css";
import Login from "./Login & Signup/Login";
import SignUp from "./Login & Signup/SignUp";
import Home from "./Pages/Home";
import { useEffect, useState } from "react";
import Movies from "./Movies-Section/Movies";

function App() {
  // const APIKey="a122cee36b1bc254ee171ee36a29bb98";
  const [movieslist, setMoviesList] = useState([]);
  // const navigate =useNavigate()


  useEffect(() => {
    fetchAPI();
   
  }, []);

  async function fetchAPI() {
    try {
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
        <Route path="/Movies" element={<Movies/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
