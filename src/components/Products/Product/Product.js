import React from 'react';
import './Product.css';


const Product = ({product}) => {
    return (
        <div className="product-item" >
            <img style={{width:'370px',height:'370px'}} src={product.img} alt=""/>
            <h4 className="main-color" >{product.productName} </h4>
            <p className="main-color" >{product.description} </p>
            <p> <span className="current"> ${product.currentPrice} </span>  <span className="previous"> <del>${product.previousPrice}</del> </span> </p>
            <p className="main-color btn" >Add to Cart</p>
        </div>
    );
};

export default Product;