import React from 'react'
import logo from "../Assets/logo2.png"
import { Link } from 'react-router-dom';
import { DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";
import "./Header.css"
import Profile from "../Assets/Avatar.png"
function Header() {
  const ScrollTop = () => {
    window.scroll({
      top:0, 
      left: 0,
      behavior: 'smooth'
    });
  }
  return (
    <div>

      <header>
      <Link onClick={ScrollTop} className='Nav' to={"/Home"} >
        <img src={logo} className='logo ' alt="" />
        </Link>
        <div className='NavItem' >
          <Link onClick={ScrollTop} className='Nav' to={"/Home"} >
            <h1 className='N1'>Home</h1>
          </Link>
          <Link onClick={ScrollTop} className='Nav' to={"/Movies"}>
            <h1 className='N1'>Movies</h1>
          </Link>
          <Link onClick={ScrollTop} className='Nav' to={"/Series"}>
            <h1 className='N1'>TV Series</h1>
          </Link>
          <Link onClick={ScrollTop} className='Nav' >
            <h1 className='N1'>Categories</h1>
          </Link>
        </div>
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src={Profile}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="Login" className="h-14 " color="secondary">
           <Link to={"/Login"}> <h1 className="font-semibold">LOG IN</h1></Link>
            </DropdownItem>
            <DropdownItem key="SignUp" className="h-14" color="success">
            <Link to={"/Signup"}> <h1 className="font-semibold">SIGN UP</h1></Link>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="Developer">Connect to DEV</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </header>
    </div>

  )
}

export default Header