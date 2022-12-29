import React from 'react';
import './Products.css'

const Products = (props) => {
   const {title,price,rating,description,img} = props.item;
    return (
        <div className='card-body'>
            <img src={img} alt="" height="300px" width="300px" />
            <h1>{title}</h1>
            <h5>Price:{price}</h5>
            <h6>Rating:{rating}</h6>
            <p><i>{description}</i></p>
        </div>
    );
};

export default Products;