import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
function Navbar() {
    return (
        <div className='nav_container'>
            <ul >
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/business">Business</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
        </div>
    )
}

export default Navbar
