import React from 'react';
import './Navbar.module.scss';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <a href="#!">
                    <img src="#!" alt="Logo do site" />
                </a>
            </div>

            <div className="box_list">
                <ul>
                    <li><a href="#!">Início</a></li>
                    <li><a href="#!">Sobre</a></li>
                    <li><a href="#!">Planos</a></li>
                    <li><a href="#!">CTA</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;