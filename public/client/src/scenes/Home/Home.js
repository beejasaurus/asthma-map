import React from 'react';
import Choropleth from '../../components/Choropleth';
import './Home.css';

const Home = (props) => (
    <section className="komodo-home">
        <div className="komodo-intro-text">
            <header>Asthma Prevalance</header>
            <p>Click on a state to review the air quality</p>
        </div>
        <div className="komodo-map-legend">
            <div className="komodo-color color-1"/>
            <div className="komodo-color color-2"/>
            <div className="komodo-color color-3"/>
            <div className="komodo-color color-4"/>
            <div className="komodo-color color-5"/>
            <div className="komodo-color color-6"/>
            <div className="komodo-color color-7"/>
            <div className="komodo-color color-8"/>
        </div>
        <Choropleth/>
    </section>
);

export default Home;