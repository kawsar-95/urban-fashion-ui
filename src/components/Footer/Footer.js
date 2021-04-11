import { faFacebookF, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import footerLogo from '../../assets/logo_img/Logo_Footer.png';
import './Footer.css';


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
            <div className="column1" >
                <img className="logo"  src={footerLogo} alt="logo"/>
                <div className="icons">
                    <FontAwesomeIcon className="icon1"  icon={faFacebookF} />
                    <FontAwesomeIcon className="icon2"  icon={faTwitter} />
                    <FontAwesomeIcon className="icon3"  icon={faLinkedin} />
                    <FontAwesomeIcon className="icon4"  icon={faYoutube} />
                    <FontAwesomeIcon className="icon5"  icon={faInstagram} />

                </div>
                <p>
                       Every spring I start going through
                       dress withdrawals and go crazy
                       over all the pretty.
                </p>
            </div>
            <div className="column2" >
                <ul>
                    <li>Shop</li>
                    <li>Products</li>
                    <li>Collections</li>
                    <li>About us</li>
                    <li>Company</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Support</li>
                    <li>Reviews</li>
                    <li>Careers</li>
                    <li>Contact us</li>
                    <li>Privacy Policy</li>
                    <li>Refund Policy</li>
                </ul>
            </div>
            <div className="column4" >
                <ul>
                    <li>Terms and Condition</li>
                    <li>FAQ's</li>
                    <li>Delivery</li>
                    <li>Returns</li>
                </ul>
            </div>
            <div className="column5" >
                <p className="title" >Subscribe</p>

                <div className="email-input" >
                <input placeholder="your email" type="text"/>
                <FontAwesomeIcon className="arrow"  icon={faLongArrowAltRight} />
                </div>
                <p><FontAwesomeIcon className="envelope"  icon={faEnvelope} /> mail@example.com  </p>
            </div>
        </div>
        </div>
    );
};

export default Footer;