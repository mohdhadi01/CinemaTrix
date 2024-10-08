import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Login & Signup/Login";
import SignUp from "./Login & Signup/SignUp";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import Series from "./Pages/Series";
import Categories from "./Pages/Categories";
import SearchPage from "./Pages/SearchPage";
import DetailPage from "./Pages/MovieDetailPage";
import TVdetailPage from "./Pages/TVdetailPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Signup" element={<SignUp />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Movies" element={<Movies />}></Route>
        <Route path="/Series" element={<Series />}></Route>
        <Route path="/Categories" element={<Categories />}></Route>
        <Route path="/Search" element={<SearchPage />}></Route>
        <Route path="/MovieDetail/:id" element={<DetailPage />}></Route>
        <Route path="/TvDetail/:id" element={<TVdetailPage />}></Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
