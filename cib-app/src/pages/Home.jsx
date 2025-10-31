import React, { Component } from 'react';
import "./Home.css";
import NavBar from '../components/layout/NavBar';
import Header from '../components/layout/Header';
import SmallMenuTap from '../components/common/SmallMenuTap';
import SubTitle from '../components/common/SubTitle';

const Home = () => {
    return ( 
        <>
        <NavBar />
        <Header />
        <section className='whiteNavBar'>
            <SmallMenuTap title="Apply Online" />
            <SmallMenuTap title="News" />
            <SmallMenuTap title="Blog Articles" />
            <SmallMenuTap title="CIB International" />
            <SmallMenuTap title="Sustainable Finance" />
            <SmallMenuTap title="Awards" />
        </section>

        <section className='applyOnlineSection'>
            <section className='applyTextCont'>
                <SubTitle title="APPLY NOW" />
            </section>
        </section>
        </>
        
     );
}
 
export default Home;