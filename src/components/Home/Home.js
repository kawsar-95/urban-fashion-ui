import React from 'react';
import FeaturedIn from '../FeaturedIn/FeaturedIn';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Products from '../Products/Products';
import Shop from '../Shop/Shop';
import Testimonial from '../Testimonial/Testimonial';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Shop></Shop>
            <Products></Products>
            <Testimonial></Testimonial>
            <FeaturedIn></FeaturedIn>
            <Footer></Footer>
        </div>
    );
};

export default Home;