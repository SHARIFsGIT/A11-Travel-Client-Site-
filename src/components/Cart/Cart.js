import React from 'react';

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
        <div>
            <h2>Booking Summary</h2>
            <h4>Packages Booked: {totalQuantity}</h4>
            <br />
            <p>Cost Per Package: {total.toFixed(2)}</p>
            <p>Services Cost: {shipping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <p>Total Cost: {grandTotal.toFixed(2)}</p>
            {props.children}
        </div>
    );
};

export default Cart;