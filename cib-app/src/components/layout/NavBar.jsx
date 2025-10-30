import React from 'react';
import "./NavBar.css";
import logoheader from "../../assets/logoheader.png"
import NavText from '../common/NavText';

const NavBar = () => {
    return ( 
        <header>
            <img src={logoheader} alt="CIB Logo" />
            <section className='menu_text_cont'>
              <NavText title="About Us" />
              <NavText title=" Investor Relations " />
              <NavText title="Responsible Banking" />
              <NavText title="Newsroom" />
              <NavText title="Learning Center" />
              <NavText title="Careers" />
              <NavText title="Others" />
            </section>
        </header>
     );
}
 
export default NavBar;