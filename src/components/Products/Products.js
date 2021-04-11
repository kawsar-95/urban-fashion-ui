import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import flowerLeft from '../../assets/bg_img/dark-flower.png';
import flowerRight from '../../assets/bg_img/light-flower.png';
import bag1 from '../../assets/products_img/bag1.png';
import bag2 from '../../assets/products_img/bag2.png';
import centario from '../../assets/products_img/centario.png';
import mac from '../../assets/products_img/mac.png';
import perfume1 from '../../assets/products_img/perfume1.png';
import perfume2 from '../../assets/products_img/perfume2.png';
import Product from './Product/Product';
import './Products.css';







const products =[
    {
        productName : 'De Rose Gold Perfume',
        description:'Floral Green fragrance for women',
        previousPrice: 75.00,
        currentPrice: 55.00,
        img: perfume1,
        alt:'De Rose Gold Perfume'
    },
    {
        productName : 'La Classic Car perfume',
        description:'Floral fragrance for Car',
        previousPrice: 75.00,
        currentPrice: 55.00,
        img: perfume2,
        alt:'La Classic Car perfume'
    },
    {
        productName : 'De Casta Blue berry Centario',
        description:'Floral Green fragrance for women',
        previousPrice: 75.00,
        currentPrice: 55.00,
        img: centario,
        alt:'De Casta Blue berry Centario'
    },
    {
        productName : 'XOFOSR Bag',
        description:'Floral Green fragrance for women',
        previousPrice: 75.00,
        currentPrice: 55.00,
        img: bag1,
        alt:'XOFOSR Bag'
    },
    {
        productName : 'MAC Jacobs collections',
        description:'Floral fragrance for Car',
        previousPrice: 75.00,
        currentPrice: 55.00,
        img: mac,
        alt:'MAC Jacobs collections'
    },
    {
        productName : 'De Casta Styles Bag',
        description:'Floral Green fragrance for women',
        previousPrice: 75.00,
        currentPrice: 55.00,
        img: bag2,
        alt:'De Casta Styles Bag'
    }
]

const Products = () => {

    return (
        <div className='products-container' >
            <div style={{textAlign:'center'}} >
               <h2 className="main-color heading" >Meet our best selling products</h2>
               <p className="title" >“Best premium laxarious Brand authentic product always available for you”</p>
               <img src={flowerLeft} alt="" className="left"/>
               <img src={flowerRight} alt="" className="right"/>
            </div>
            <div className="arrow_top">
            <FontAwesomeIcon className="icon"  icon={faLongArrowAltRight} />

            </div>
            <div className="arrow_bottom">
            <FontAwesomeIcon className="icon"  icon={faLongArrowAltRight} />
            </div>
            <div className="product-container" >

               {
                   products.map(pd=> <Product product={pd} ></Product> )
               }

            </div>
        </div>
    );
};

export default Products;