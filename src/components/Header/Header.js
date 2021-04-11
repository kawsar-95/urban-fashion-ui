import React from 'react';
import whiteFlower from '../../assets/bg_img/white-flower.png';
import femaleModel from '../../assets/models_img/model1.png';
import './Header.css';
import Navbar from './Navbar/Navbar';

const Header = () => {
    return (
        <div>
            <div>
            <Navbar></Navbar>
            </div>
            <div className="header-main">
                <div className="header-main_left" >
                    <img style={{width:"100%",height:"500px"}} src={femaleModel} alt="female_model"></img>
                </div>
                <div className="header-main_right" >
                    <div className="content">
                     <h2 className="white" >New Fashion Trends
                     for Summer</h2>
                     <p className="white" >
                     There are many variations of passages of Lorem Ipsum available,
                     but the majority have suffered alteration in some form, by injected
                     humour, or randomised words.
                     </p>
                     <button className="white" >Shop now</button>
                    </div>
                     <img src={whiteFlower} alt="white_flower" className="right-bg"/>
                </div>

            </div>
        </div>
    );
};

export default Header;