import React, { Component } from 'react';
import "./Home.css";
import NavBar from '../components/layout/NavBar';
import Header from '../components/layout/Header';
import SmallMenuTap from '../components/common/SmallMenuTap';
import SubTitle from '../components/common/SubTitle';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';

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
                <SectionTitle title=" Apply online now for cards and loans with ease!" />
                <Card />
            </section>
        </section>
        </>
        
     );
}
 
export default Home;