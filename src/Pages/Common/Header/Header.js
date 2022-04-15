import React from 'react';
import './Header.css'
import logo from '../../../images/logo2.png'
import cart from '../../../images/icons/Path 1.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
           <div className='nav-logo'>
               <Link to="/"><img  src={logo} alt="" /></Link>
           </div>
           <div className='nav-desc'>
                <img src={cart} alt="" />
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
               
           </div>
        </nav>
    );
};

export default Header;