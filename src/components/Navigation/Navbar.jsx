import React, { useState } from "react";
import Navslinks from "../Navigation/Navslinks"
import Logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';
import Button from "../Navigation/Button";
const Navbar = () => {
const [open, setOpen] = useState(false)
  return (
      <nav>
        <div className="top-top">
          <div className="logo-logo">
            <img style={{cursor: "pointer"}} src={Logo} alt="logo" className="mymage " />
            <div className="set" style={{fontSize: "30px", lineHeight: "36px", cursor: "pointer"}} onClick={() => setOpen(!open)}>
              {/* <RiMenu2Fill name={`${open ? "menu" : "open"}`} /> */}
              <ion-icon name={`${open ? "close-outline" : "menu-outline"}`}></ion-icon>
            </div>
          </div>
          <ul className="context">
            <li>
              <Link to="/" className="the-ul">
                Home
              </Link>
            </li>
            <Navslinks/>
          </ul>
          <div className="btnn"> 
            <Button/>
          </div>
          {/* mobile nav */}
          <ul className={`context-2`} style={{
            left: open ? '0rem' : "-100rem",
            transition: "0.5s"
          }} >
            <li>
              <Link to="/" className="the-ul">
                Home
              </Link> 
            </li>
            <Navslinks/>
            <div className="btnn-2"> 
              <Button/>
            </div>
          </ul>
        </div>
      </nav>
  );
};

export default Navbar;
