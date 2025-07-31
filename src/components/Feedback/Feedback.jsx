import React from 'react';
import './Feedback.scss';

const Feedback = () => {
    return (
        <section className="box-feedback">
            <div className="container">
                <div className="row">
                    <div className="box-feedback-content">
                        <div className="card-feed"></div>
                        <div className="card-feed"></div>
                        <div className="card-feed"></div>
                        <div className="card-feed"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feedback;