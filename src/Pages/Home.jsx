import React from 'react'
import Footer from '../Header-Footer/Footer';
import Header from '../Header-Footer/Header';
import Caraousel from '../Components/Caraousel';
function Home(props) {
  const movieslist = props.movieslist;
  console.log(movieslist);
  return (
    <div>

      <Header />
      <Caraousel movieslist={movieslist} />
      <Footer />
    </div>
  )
}

export default Home