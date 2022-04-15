import React from 'react';

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <div>
            <p><small>All rights reserved by{year} </small></p>
        </div>
    );
};

export default Footer;