import React from 'react';
import './Hero.scss';

const Hero = () => {
    return (
        <section className="box-hero">
            <div className="container">
                <div className="row">
                    <div className="box-hero-content-left col-12 col-sm-6 col-md-6"></div>
                    <div className="box-hero-content-right col-12 col-sm-6 col-md-6"></div>                   
                </div>                    
            </div>
        </section>
    );
};

export default Hero;