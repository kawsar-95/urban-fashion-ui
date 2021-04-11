import React from 'react';
import featured1 from '../../assets/featured_img/featured1.png';
import featured2 from '../../assets/featured_img/featured2.png';
import featured3 from '../../assets/featured_img/featured3.png';
import featured4 from '../../assets/featured_img/featured4.png';
import featured5 from '../../assets/featured_img/featured5.png';
import featured6 from '../../assets/featured_img/featured6.png';
import './FeaturedIn.css';

const FeaturedIn = () => {
    return (
        <div className="featured-container" >
            <h3 className="main-color" >Featured in</h3>
            <div className="featured-item">
            <div>
                <img className="img1" src={featured1} alt="organization"/>
            </div>
            <div>
                <img className="img2" src={featured2} alt="organization"/>
            </div>
            <div>
                <img className="img3" src={featured3} alt="organization"/>
            </div>
            <div>
                <img className="img4" src={featured4} alt="organization"/>
            </div>
            <div>
                <img className="img5" src={featured5} alt="organization"/>
            </div>
            <div>
                <img className="img6" src={featured6} alt="organization"/>
            </div>
            </div>
        </div>
    );
};

export default FeaturedIn;