import React from 'react';
import { Link } from 'react-router-dom';
import './FoodNav.css'

const FoodNav = () => {
    return (
        <div className='foodNav'>
            <Link to="/breakfast">Breakfast</Link>
            <Link to="/lunch">Lunch</Link>
            <Link to="/dinner">Dinner</Link>
        </div>
    );
};

export default FoodNav;