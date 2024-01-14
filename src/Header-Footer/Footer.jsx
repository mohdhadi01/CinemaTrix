import React from 'react'
import "./Footer.css"
import Footerbg from "../Assets/footer-bg.jpg"
import logo from "../Assets/logo2.png"
import github from "../Assets/github.png"
import linked from "../Assets/linkedin.png"
import { Link } from 'react-router-dom'

function Footer() {
    const ScrollTop = () => {
        window.scroll({
          top:0, 
          left: 0,
          behavior: 'smooth'
        });
      }
    return (
        <div className='FullFooter' style={{
            backgroundImage: `url(${Footerbg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover",
            height: "400px", width: "100vw", display: "flex", justifyContent: "center",
        }}>
            <div className="components">
                <img className='belowlogo' src={logo} alt="" style={{ height: "60px", marginTop: "50px" }} />
                <footer>
                    <div className="section1">
                       <Link onClick={ScrollTop} to={"/home"}> <h1 className='text1' >Home</h1></Link>
                       <Link onClick={ScrollTop} to={"/Movies"}> <h1 className='text1'>Movies</h1></Link>
                       <Link onClick={ScrollTop} to={"/Series"}>  <h1 className='text1'>TV Series</h1></Link>
                    </div>
                     <div className="section2">
                        <h1 className='text1'>Recent Release</h1>
                        <h1 className='text1'>Top Rated</h1>
                        <h1 className='text1'>You Must Watch</h1>
                    </div>
                </footer>

                <div className="container">
                    <ul className='socials'>
                        <li><a href="https://www.linkedin.com/in/mohd-hadi-5a4638226/"><img src={linked} className="hover-target" alt='' ></img></a></li>
                        <li><a href="https://github.com/mohdhadi01"><img src={github} className="hover-target" alt=''></img></a></li>
                    </ul>
                    <p className='credit'>Copyright &copy; 2024 Build by Mohd Hadi.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer