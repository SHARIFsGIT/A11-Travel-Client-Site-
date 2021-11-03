import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import { addToDb } from '../../utilities/fakedb';
import './Shop.css';
import useCart from '../../hooks/useCart';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useCart();
    
    // products to be rendered on the UI
    const [displayProducts, setDisplayProducts] = useState([]);
    useEffect(() => {
        fetch(`https://cryptic-journey-83985.herokuapp.com/services`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                setDisplayProducts(data.products);
                
            });
    }, []);



    const handleAddToCart = (product) => {
        const exists = cart.find(pd => pd.key === product.key);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(pd => pd.key !== product.key);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, product];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        
        }
        setCart(newCart);
    
        // save to local storage (for now)
        addToDb(product.key);
        

    }
    const handleSearch = event => {
        const searchText = event.target.value;

        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));

        setDisplayProducts(matchedProducts);
    }
    return (
        <>
            <h2 className="ms-5 mt-5">Tour Packages</h2>
                <div className="home-services">
                    {
                        displayProducts.map(product => <Product
                            key={product.key}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        >  
                        </Product>)
                    }
                </div>
        </>
    );
};

export default Shop;