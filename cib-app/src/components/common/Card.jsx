import React from 'react';
import "./Card.css";

const Card = (props) => {
    return ( <>
        <section className='cardContainer'>
            <img src={props.img} className='cardImg' />
            <h1 className='cardTitle'>{props.text}</h1>
        </section>
    
    </> );
}
 
export default Card;