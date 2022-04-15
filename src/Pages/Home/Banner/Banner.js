import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-contaier'>
            
            <div className="banner">
                <p>Best food waiting for your belly</p>
                <input type="text" placeholder='search food items'/>
                <button>Search</button>
            </div>
        </div>
    );
};

export default Banner;