import React from "react";
import './Navbar.css'
import * as All from "./App";
import { useState } from "react";
// import UserCard from './Card'

const Navbar = ({ onSetIsClicked }) => {
    const clicked = () => {

        onSetIsClicked(1);
    }

  

        
    
    return (
        <>
            <nav>
                <ul>
                    <li><a>Fetch API</a></li>
                </ul>

                <button onClick={clicked}>Get Users</button>

            </nav>
            

            {/* <UserCard first_name={search}/> */}


            <hr></hr>
        </>
    )
}
export default Navbar;