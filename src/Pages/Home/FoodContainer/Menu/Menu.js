import React, { useState } from 'react';
import Categories from './Categories';
import items from './data';
import './FoodContainer.css'
import MenuItem from './MenuItem';

const allCategories = ['all', ...new Set(items.map(item=>item.category))]

const Menu = () => {
    const [menuItems, setMenuItems]=useState(items)
    const [categories, setCategories] = useState(allCategories)
    const filterItems = category=>{
        if(category=== 'all'){
            setMenuItems(items)
            return;
        }
         const newItems = items.filter((item)=>item.category === category)
         setMenuItems(newItems)
    }
    return (
        <div>
            <h1>menu{menuItems.length}</h1>
            <h2>Our Menu</h2>
            <Categories categories={categories} filterItems={filterItems}></Categories>
            <div className="menu-container">
            {menuItems.map(menuItem=> <MenuItem key={menuItem.id} menuItem={menuItem}></MenuItem>)}
            </div>
        </div>
    );
};

export default Menu;