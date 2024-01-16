import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Login from "./Login & Signup/Login";
import SignUp from "./Login & Signup/SignUp";
import Home from "./Pages/Home";
import { useEffect, useState } from "react";
import Movies from "./Pages/Movies";
import Series from "./Pages/Series";
import Categories from "./Pages/Categories";
import SearchPage from "./Pages/SearchPage";

function App() {
  // const APIKey="a122cee36b1bc254ee171ee36a29bb98";
  const navigate = useNavigate();

  useEffect(() => {
    // navigate("/home");
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Signup" element={<SignUp />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Movies" element={<Movies />}></Route>
        <Route path="/Series" element={<Series />}></Route>
        <Route path="/Categories" element={<Categories />}></Route>
        <Route path="/Search" element={<SearchPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
