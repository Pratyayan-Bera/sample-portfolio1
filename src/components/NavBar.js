import React from 'react'
import { useState } from 'react';
import { BiLogoGithub } from "react-icons/bi";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BiLogoDiscordAlt } from "react-icons/bi";
import { FiAlignRight } from "react-icons/fi";
import { FiX } from "react-icons/fi";
export const NavBar = () => {
  const [menuOpen,setMenuOpen]= useState(false);

  const toggleMenu =()=>{
    setMenuOpen(!menuOpen);
  };
  return (
    <>
        <div class="Navigation">
              <img src="https://cdn-icons-png.flaticon.com/512/4882/4882524.png" alt="tasbir" width={60} height={60}/>
            <nav>
                <ul>
                    <li><BiLogoInstagramAlt /></li>
                    <li><BiLogoGithub /></li>
                    <li><BiLogoLinkedinSquare /></li>
                    <li><BiLogoDiscordAlt /></li>
                </ul>
            <div className="ham" onClick={toggleMenu}>
            <FiAlignRight />
            </div>
            </nav>
        </div>

        <div className="hamMenu">
        <ul className={menuOpen ? "active":""}>
            <div className="ham" onClick={toggleMenu}>
            <FiX />
            </div>
                <li>Instagram</li>
                <li>Github</li>
                <li>linkedIn</li>
                <li>Discord</li>
              </ul>
        </div> 
    </>
  )
}
