import React from 'react';
import './Navbar.scss';
import Logo from '../../assets/images/logo-personal.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="box-menu container">
                <div className="box-logo">
                    <a href="#!">
                        <img src={Logo} alt="Logo do site" width={80} height={60} />
                    </a>
                </div>

                <div className="box-list">
                    <ul>
                        <li><a href="#!">Início</a></li>
                        <li><a href="#beneficit">Benefício</a></li>
                        <li><a href="#!">Planos</a></li>
                        <li><a href="#!" className="btn-cta">Entre em contato</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;