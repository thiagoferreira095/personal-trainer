import React from 'react';
import './Plans.scss';
import { TbCurrencyReal } from "react-icons/tb";

const Plans = () => {
    return (
        <section className="box-plans" id="plans">
            <div className="container">
                <div className="row">
                    <h2 className="title-plans">Trouxemos <span className="span-destaque">planos</span> que cabem no seu <span className="span-destaque">bolso</span></h2>
                
                    <div className="box-plans-content">
                        <div className="card-plans">
                            <div className="box-day">
                                <span>Mensal</span>
                            </div>
                            <div className="card-plans-content">
                                <div className="box-type-plans">
                                    <span className="span-type-plans span-basico">Plano básico</span>
                                </div>
                                <div className="box-content-plans">
                                    <p>- Acompanhamento por 30 dias</p>
                                    <p>- Apenas Treino</p>
                                    <p>- Avaliação Online</p>
                                </div>
                                <div className="box-value-plans">
                                    <div className="box-icon-value">
                                        <TbCurrencyReal size={30} color="#0D1117" />
                                    </div>
                                    <span className="span-value-plan">199,90</span>
                                </div>
                                <div className="line-divider"></div>
                                <div className="box-type-plans">
                                    <span className="span-type-plans">Plano avançado</span>
                                </div>
                                <div className="box-content-plans">
                                    <p>- Acompanhamento por 30 dias</p>
                                    <p>- Treino + Dieta</p>
                                    <p>- Avaliação Online</p>
                                </div>
                                <div className="box-value-plans">
                                    <div className="box-icon-value">
                                        <TbCurrencyReal size={30} color="#0D1117" />
                                    </div>
                                    <span className="span-value-plan">249,90</span>
                                </div>
                            </div>
                        </div>
                        <div className="card-plans card-mid">
                            <div className="box-day box-day-mid">
                                <span>Bimestral - Recomendado</span>
                            </div>
                            <div className="card-plans-content">
                                <div className="box-type-plans">
                                    <span className="span-type-plans span-basico">Plano básico</span>
                                </div>
                                <div className="box-content-plans">
                                    <p>- Acompanhamento por 60 dias</p>
                                    <p>- Apenas Treino</p>
                                    <p>- Avaliação Presencial comigo com direito a volta</p>
                                </div>
                                <div className="box-value-plans">
                                    <div className="box-icon-value">
                                        <TbCurrencyReal size={30} color="#0D1117" />
                                    </div>
                                    <span className="span-value-plan">299,90</span>
                                </div>
                                <div className="line-divider"></div>
                                <div className="box-type-plans">
                                    <span className="span-type-plans">Plano avançado</span>
                                </div>
                                <div className="box-content-plans">
                                    <p>- Acompanhamento por 60 dias</p>
                                    <p>- Treino + Dieta</p>
                                    <p>- Avaliação Presencial com direito a volta</p>
                                    <p>- Avaliação Online com o nutricionista</p>
                                </div>
                                <div className="box-value-plans">
                                    <div className="box-icon-value">
                                        <TbCurrencyReal size={30} color="#0D1117" />
                                    </div>
                                    <span className="span-value-plan">449,90</span>
                                </div>
                            </div>
                        </div>
                        <div className="card-plans">
                            <div className="box-day">
                                <span>Trimestral</span>
                            </div>
                            <div className="card-plans-content">
                                <div className="box-type-plans">
                                    <span className="span-type-plans span-basico">Plano básico</span>
                                </div>
                                <div className="box-content-plans">
                                    <p>- Acompanhamento por 90 dias</p>
                                    <p>- Apenas Treino</p>
                                    <p>- Avaliação Presencial completa com direito a volta</p>
                                </div>
                                <div className="box-value-plans">
                                    <div className="box-icon-value">
                                        <TbCurrencyReal size={30} color="#0D1117" />
                                    </div>
                                    <span className="span-value-plan">399,90</span>
                                </div>
                                <div className="line-divider"></div>
                                <div className="box-type-plans">
                                    <span className="span-type-plans">Plano avançado</span>
                                </div>
                                <div className="box-content-plans">
                                    <p>- Acompanhamento por 90 dias</p>
                                    <p>- Treino + Dieta</p>
                                    <p>- Avaliação Presencial comigo com direito a volta</p>
                                    <p>- 1 Consulta presencial com o nutricionista e as demais online</p>
                                </div>
                                <div className="box-value-plans">
                                    <div className="box-icon-value">
                                        <TbCurrencyReal size={30} color="#0D1117" />
                                    </div>
                                    <span className="span-value-plan">649,90</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Plans;