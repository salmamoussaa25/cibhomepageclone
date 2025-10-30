import React from 'react';
import "./NavText.css";

const NavText = (props) => {
    return ( 
        <p className='menu_text'>{props.title}</p>
     );
}
 
export default NavText;