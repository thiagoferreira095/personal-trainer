import React from 'react';
import { FaDumbbell } from 'react-icons/fa';
import { MdTrackChanges } from 'react-icons/md';
import { BiSupport } from 'react-icons/bi';
import './About.scss';

const About = () => {
    return (
        <section className="box-about">
            <div className="container">
                <div className="row">
                    <h2 className="title-beneficit">Temos <span className="span-destaque">benefícios</span> incríveis para <span className="span-destaque">você</span></h2>
                    <div className="box-about-content">
                        <div className="card">
                            <div className="card-header">
                                <FaDumbbell size={42} color="#EC7C0D" />
                                <h3>Treino e dieta 100% personalizados</h3>
                            </div>

                            <div className="card-body">
                                <p>Seu treino e sua alimentação são desenvolvidos exclusivamente de acordo com o seu nível, objetivo e rotina.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <MdTrackChanges size={42} color="#EC7C0D" />
                                <h3>Acompanhamento contínuo</h3>
                            </div>

                            <div className="card-body">
                                <p>Faremos ajustes periódicos no seu treino e na sua dieta de forma estratégica para garantir sua evolução constante.</p>                                
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <BiSupport size={42} color="#EC7C0D" />
                                <h3>Acesso ao suporte online</h3>
                            </div>

                            <div className="card-body">
                                <p>Você terá suporte direto online via WhatsApp para esclarecer qualquer questão e garantir um acompanhamento mais eficaz.</p>
                            </div>
                        </div>
                    </div>
                    <a href="#!" className="btn-cta-about">Comece a transformação agora mesmo</a>
                </div>
            </div>
        </section>
    );
};

export default About;