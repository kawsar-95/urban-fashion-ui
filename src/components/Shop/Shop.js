import React from 'react';
import modelShopLeft1 from '../../assets/models_img/shop-left1.png';
import modelShopLeft2 from '../../assets/models_img/shop-left2.png';
import modelShopRight from '../../assets/models_img/shop-right.png';
import './Shop.css';

const Shop = () => {
    return (
        <div className="shop-container" >
            <div className="left">
                <img src={modelShopLeft1} alt="model"/>
                <img style={{paddingTop:'30px'}} src={modelShopLeft2} alt="model"/>
                <div className="text1">
                    <p>
                        <span className="white light-text" >more</span> <br/>
                        <span className="white heavy-text" >FASHION</span> <br/>
                        <span className="white light-text" >more</span> <br/>
                        <span className="white heavy-text" >GORGIOUS</span>
                    </p>
                </div>
                <div className="text2 white">
                    <p>BEST COSMATICS
                      COLLECTIONS</p>
                </div>
            </div>
            <div className="right">
                <img src={modelShopRight} alt="model"/>
            </div>
        </div>
    );
};

export default Shop;