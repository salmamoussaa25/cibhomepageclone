import React, { Component } from 'react';
import "./Header.css"
import Button from '../common/Button';


const Header = () => {
    return ( 
        <section className='hero_section'>
            <h1>CIB</h1>
            <p>Delivering value to our clients, our <br /> community and our shareholders</p>
            <Button title="Discover More"/>
        </section>
     );
}
 
export default Header;