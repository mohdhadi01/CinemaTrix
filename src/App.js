import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login & Signup/Login';
import SignUp from './Login & Signup/SignUp';
import Home from './Pages/Home';

function App() {
  // const APIKey="a122cee36b1bc254ee171ee36a29bb98";

  // const options = {
  //   method: 'GET',
  //   headers: {
  //     accept: 'application/json',
  //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTIyY2VlMzZiMWJjMjU0ZWUxNzFlZTM2YTI5YmI5OCIsInN1YiI6IjY1MjgyY2E5MWYzZTYwMDEzOTlkMjg2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AHxTYhk6c-0aPLETLVS2-oxQqETUReQ5Uyhi9-eZ5bA'
  //   }
  // };
  
  // fetch('https://api.themoviedb.org/3/configuration', options)
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //   .catch(err => console.error(err));



  return (
    <div>
    
     <Routes>
      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/Signup' element={<SignUp/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
     </Routes>
    
    </div>
  );
}

export default App;
