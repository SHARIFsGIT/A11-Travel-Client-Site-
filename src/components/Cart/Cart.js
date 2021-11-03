import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    const shipping = total > 0 ? 150 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;
    return (
        <div className="Cart">
            <h2>Booking Summary</h2>
            <h4>Packages Booked: {totalQuantity}</h4>
            <br />
            <p className="Cart">Cost Per Package: {total.toFixed(2)}</p>
            <p  className="Cart">Services Cost: {shipping}</p>
            <p className="Cart">Tax: {tax.toFixed(2)}</p>
            <p className="Cart">Total Cost: {grandTotal.toFixed(2)}</p>
            {props.children}
        </div>
    );
};

export default Cart;