import React from 'react';
import './FoodContainer.css'

const MenuItem = ({menuItem}) => {
     const {id, title, img, desc, price} = menuItem;
    return (
        <div className='menu-item'>
            <img src={img} alt="" />
            <h3>{title}</h3>
            <p>{price}</p>
        </div>
    );
};

export default MenuItem;