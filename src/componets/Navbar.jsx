import React, { useState } from 'react';
import "../styles/Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faImages, faEnvelope, faAddressCard, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    // console.log(menuOpen)
    return (
        <nav>
            <NavLink to={"/"} className='title'>
                <FontAwesomeIcon icon={faHome} className='icons' />
                <span> </span>
                Home
            </NavLink>
            
            <div className="menu" onClick={() => { setMenuOpen(!menuOpen) }}>
                <span></span>
                <span></span>
                <span></span>

            </div>
            <ul className={menuOpen ? "open" : ""} >
                <li>
                <NavLink to={"/"} id='hide' >
                <FontAwesomeIcon icon={faHome} />
                <span> </span>
                Home
            </NavLink>
                </li>
                <li>

                    <NavLink to={"/gallery"}>
                        <FontAwesomeIcon icon={faImages} />
                        <span> </span>
                        Gallery</NavLink>
                </li>
                <li>

                    <NavLink to={"/contact"}>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span> </span>
                        Contact</NavLink>
                </li>
                <li>

                    <NavLink to={"/about"}>
                        <FontAwesomeIcon icon={faCircleInfo} />
                        <span> </span>
                        Abouts</NavLink>
                </li>

            </ul>

        </nav>
    )
}

export default Navbar