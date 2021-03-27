import React,{ useState,useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click,setClick] = useState(false);
    const [button,setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    const showButton=()=>{
        if(window.innerWidth <= 960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    };
    useEffect(()=>{
        showButton();
    },[]);

    window.addEventListener('resize', showButton);

    return (
        <>
         <nav className="navbar">
            <div class="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMenu}>
                    A Crazy Tourist 
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times':'fas fa-bars'}/>
                </div>
                <ul className={click? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to="/" className='nav-links' onClick={closeMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/about" className='nav-links' onClick={closeMenu}>
                            About Us
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/contact" className='nav-links' onClick={closeMenu}>
                            Contact Us
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/services" className='nav-links' onClick={closeMenu}>
                            Services we offer
                        </Link>
                    </li>
                </ul>
                {
                    button
                }
            </div>
         </nav> 
        </>
    )
}

export default Navbar;
