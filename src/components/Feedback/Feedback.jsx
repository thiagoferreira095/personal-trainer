import React from 'react';
import './Feedback.scss';
import { FaUser } from 'react-icons/fa';
import { FaStar } from "react-icons/fa";

const Feedback = () => {
    return (
        <section className="box-feedback">
            <div className="container">
                <div className="row">
                    <div className="box-feedback-content">
                        <div className="card-feed">
                            <div className="card-feed-header">
                                <div className="card-header-icon">
                                    <div className="box-icon">
                                        <FaUser size={52} color="#EC7C0D" />
                                    </div>
                                </div>
                                <div className="card-header-star">
                                    <div className="box-star-name">
                                        <span>Paloma</span>
                                    </div>
                                    <div className="box-star-estrela">
                                        <FaStar size={24} color="#EC7C0D" />
                                        <FaStar size={24} color="#EC7C0D" />
                                        <FaStar size={24} color="#EC7C0D" />
                                        <FaStar size={24} color="#EC7C0D" />
                                        <FaStar size={24} color="#EC7C0D" />
                                    </div>
                                </div>
                            </div>
                            <div className="card-feed-body">
                                <p>“Vivendo uma vida melhor e com treinos que se encaixam na minha rotina.”</p>
                            </div>
                        </div>
                        <div className="card-feed">
                            <div className="card-feed-header">
                                <div className="card-header-icon">
                                    <div className="box-icon">
                                        <FaUser size={52} color="#EC7C0D" />
                                    </div>
                                </div>
                                <div className="card-header-star">
                                    <div className="box-star-name">
                                        <span>Aline</span>
                                    </div>
                                    <div className="box-star-estrela">
                                        <FaStar size={24} color="#EC7C0D" />
                                        <FaStar size={24} color="#EC7C0D" />
                                        <FaStar size={24} color="#EC7C0D" />
                                        <FaStar size={24} color="#EC7C0D" />
                                        <FaStar size={24} color="#EC7C0D" />
                                    </div>                                
                                </div>                                
                            </div>
                            <div className="card-feed-body">
                                <p>“De treinos básicos aos palcos de fisiculturismo com um físico que jamais imaginei que teria.”</p>
                            </div>
                        </div>
                        <div className="card-feed">
                            <div className="card-feed-header">
                                <div className="card-header-icon">
                                    <div className="box-icon">
                                        <FaUser size={52} color="#EC7C0D" />
                                    </div>
                                </div>
                                <div className="card-header-star">
                                    <div className="box-star-name">
                                        <span>Lucas</span>
                                    </div>
                                    <div className="box-star-estrela">
                                        <FaStar size={24} color="#EC7C0D" />
                                        <FaStar size={24} color="#EC7C0D" />
                                        <FaStar size={24} color="#EC7C0D" />
                                        <FaStar size={24} color="#EC7C0D" />
                                        <FaStar size={24} color="#EC7C0D" />
                                    </div>                                
                                </div>                                
                            </div>
                            <div className="card-feed-body">
                                <p>
                                    “Do sedentarismo aos treinos. Vencendo a obesidade e conseguindo evoluir sem pressa.”
                                </p>
                            </div>
                        </div>
                        <div className="card-feed">
                            <div className="card-feed-header">
                                <div className="card-header-icon">
                                    <div className="box-icon">
                                        <FaUser size={52} color="#EC7C0D" />
                                    </div>
                                </div>
                                <div className="card-header-star">
                                    <div className="box-star-name">
                                        <span>Ellen</span>
                                    </div>
                                    <div className="box-star-estrela">
                                        <FaStar size={24} color="#EC7C0D" />
                                        <FaStar size={24} color="#EC7C0D" />
                                        <FaStar size={24} color="#EC7C0D" />
                                        <FaStar size={24} color="#EC7C0D" />
                                        <FaStar size={24} color="#EC7C0D" />
                                    </div>                                    
                                </div>                                
                            </div>
                            <div className="card-feed-body">
                                <p>“Eu era obesa. Mas, consegui perder 20kg treinando musculação e fazendo cárdio diariamente com uma dieta saborosa.”</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feedback;