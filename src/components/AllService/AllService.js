import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const AllService = (props) => {

    const { title,duration,description,price,image } = props.product;
    return (
        <div className="product">
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <h4 className="product-name">{title}</h4>
                <p><small>{duration}</small></p>
                <p>Price: {price}</p>
                <p>{description}</p>
                <br />
                <button
                    onClick={() => props.handleAddToCart(props.product)}
                    
                    className="btn-regular"
                > <FontAwesomeIcon icon={faShoppingCart} />Book Now</button>
            </div>
        </div>
    );
};

export default AllService;