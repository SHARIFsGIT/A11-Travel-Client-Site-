import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import useAuth from './../../hooks/useAuth';
import { useHistory } from 'react-router';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();
    const history = useHistory();
    
    useEffect(() => {
        fetch(`https://cryptic-journey-83985.herokuapp.com/booked_service?email=${user.email}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('idToken')}`
            }
        })
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                }
                else if (res.status === 401) {
                    history.push('/login');
                }

            })
            .then(data => setOrders(data));
    }, [])
    const handleRemoveOrder = (id)=>{
        const confirm = window.confirm('Are You Sure To Delete?')
        if(confirm){
            const url = `https://cryptic-journey-83985.herokuapp.com/booked_service/${id}`;
        fetch(url,{
            method:'DELETE'
        })
        .then(res=> res.json())
        .then(data=>{
            if(data.deletedCount>0){
                alert('Deleted Successfully')
                const remainingUsers =orders.filter(order => order._id !== id);
                setOrders(remainingUsers);
            }
        })
        }
    }

    return (
        <div>
            <h2>You have Placed: {orders.length} Orders</h2>
            <ol>
                {orders.map(order => <li
                    key={order._id}
                >Name: {order.name} <br /> Email: {order.email} <button onClick={()=>handleRemoveOrder(order._id)}>Remove Order</button></li>)}
            </ol>
        </div>
    );
};

export default Orders;
