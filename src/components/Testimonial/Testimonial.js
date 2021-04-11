import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import client1 from '../../assets/models_img/client1.png';
import client2 from '../../assets/models_img/client2.png';
import './Testimonial.css';

const Testimonial = () => {
    return (
        <div className="testimonial-container" >
            <p className="title" >Clients Say about us</p>
            <div className="divider">
             <div className="arrow-btn">
             <FontAwesomeIcon className="icon"  icon={faLongArrowAltRight} />
             </div>
                <div className="left">
                <h3 className="heading main-color" >Testimonial</h3>
                <img src={client1} alt=""/>
                <div className="left_quote"></div>
                <div className="text-content">
                <h4 className="main-color">Natasha Malina</h4>
                <p className="main-color">Beauty Model in USA</p>
                <p className="details">Every spring I start going through dress withdrawals and go crazy
                  over all the pretty spring dresses that come out haha. It’s like
                  famine and then feast and dresses</p>
                </div>
                </div>
                <div className="right">
                <img src={client2} alt=""/>
                <div className="right_quote"></div>
                <div className="text-content">
                <h4 className="main-color">Team Xodias</h4>
                <p className="main-color">Fashion House</p>
                <p className="details">
                Every spring I start going through dress withdrawals and go crazy
                 over all the pretty spring dresses that come out haha. It’s like
                famine and then feast and dresses
                </p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;