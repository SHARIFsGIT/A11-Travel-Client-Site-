import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { title, image, description, price, duration } = props.product;

    return (
        <div className="product">
            <div>
                <img src={image} alt="" />
            </div>
            <div className="product_details">
                <h4 className="product-name">{title}</h4>
                <p>Duration: {duration}</p>
                <p>Cost Per Person: {price}</p>
                <p>{description}</p>
                <Link to="/review" className="btn p-2">View Details</Link>
            </div>
        </div>
    );
};
export default Product;