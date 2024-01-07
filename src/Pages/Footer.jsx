import React from 'react'
import "./Footer.css"
import Footerbg from "../Assets/footer-bg.jpg"
import logo from "../Assets/logo2.png"
import github from "../Assets/github.png"
import linked from "../Assets/linkedin.png"

function Footer() {

    return (
        <div style={{
            backgroundImage: `url(${Footerbg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover",
            height: "400px", width: "100vw", display: "flex", justifyContent: "center",
        }}>
            <div className="components">
                <img className='belowlogo' src={logo} alt="" style={{ height: "60px", marginTop: "50px" }} />
                <footer>
                    <div className="section1">
                        <h1 className='text1' >Home</h1>
                        <h1 className='text1'>Movies</h1>
                        <h1 className='text1'>TV Series</h1>
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