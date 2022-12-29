import React from 'react';
import './Products.css'

const Products = (props) => {
   const {title,price,rating,description,img} = props.item;
    return (
        <div className='card-body'>
            <img src={img} alt="" />
            <h3>{title}</h3>
            <h5>Price:{price}</h5>
            <h6>Rating:{rating}</h6>
            <p><i>{description}</i></p>
            <button className='btn'>Add To Cart</button>
        </div>
    );
};

export default Products;