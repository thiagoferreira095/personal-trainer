import React from 'react';
import './Hero.scss';
import { FaWhatsapp } from 'react-icons/fa';

const Hero = () => {
    return (
        <section className="box-hero" id="home">
            <div className="container">
                <div className="row">
                    <div className="box-hero-content-left">
                        <div className="hero-header">
                            <h1 className="title-hero">Personal Trainer - Franciele Florentino</h1>
                            <p>São mais de 2 anos ajudando pessoas a se reconectarem com o próprio corpo.</p>
                            <p> Eu acompanhei mais de 300 alunos e cada transformação me mostra que estou no caminho certo.</p>
                            <p>Meu método é simples, leve e focado em resultados reais. Não acredito em pressa, acredito em constância.</p>
                        </div>
                        <div className="hero-cta">
                            <a href="https://wa.me/5581992292160?text=Olá, gostaria de saber mais sobre a consultoria e qual o primeiro passo para fazer parte do team ✅" className="btn-hero btn-cta">Fale comigo agora mesmo</a>
                            <a href="#beneficit" className="btn-hero btn-beneficit">Conheça os benefícios</a>
                        </div>
                    </div>
                    <div className="box-hero-content-right">
                        <iframe src="https://www.youtube.com/embed/4XjRfdcig4c" frameborder="0"   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy" className="video-hero"></iframe>
                    </div>                   
                </div>                    
            </div>
        </section>
    );
};

export default Hero;