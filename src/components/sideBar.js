import axios from 'axios';
import React, { useState, useEffect } from 'react';

const SideBar = ({ isSidebarOpen, toggleSidebar }) => {

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetchCartItems();
    }, [cartItems]);

    const fetchCartItems = async () => {
        const userString = localStorage.getItem('user');
        
        if (!userString) {
            console.error('User not logged in');
            // Optionally, redirect to login page or show a message to the user
            return;
        }
        const user = JSON.parse(userString);
        const token = user.token;
    
        try {
            const response = await axios.get(`http://localhost:4000/cart/items`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setCartItems(response.data);
        } catch (error) {
            console.error('Error fetching cart items:', error);
        }
    };

    const deleteItem = async (id) => {
        const userString = localStorage.getItem('user');
        const user = JSON.parse(userString);
        const token = user.token;
    
        try {
            const response = await axios.delete(`http://localhost:4000/cart/delete/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setCartItems(response.data);
            fetchCartItems();
            // alert('Item removed from cart');
        } catch (error) {
            console.error('Error fetching cart items:', error);
        }
    };


    return (
        <div className="product-page">
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <div className="topBar">
                    <p className="cartHeading">CART</p>
                    <a onClick={toggleSidebar} className="close-btn"> <i className="fas fa-times"></i></a>
                </div>
                <div className="cartMovebar">
                    <marquee scrollamount="10">DELIVERED IN 4-5 DAYS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FREE DELIVERY&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7 DAYS FREE EXCHANGE</marquee>
                </div>

                <div className="cartItems">
                    {cartItems.length > 0 ? (
                        cartItems.map((shoe, index) => (
                            <div key={index} className="cartShoe">
                                <img className="cartShoeImg" src={shoe.img}></img>
                                <div className="cartShoeDescription">
                                    <p className="shoeName">{shoe.name}</p>
                                    <p>{shoe.price}</p>
                                    <button className='cartDelete' onClick={() => deleteItem(shoe._id)}>DELETE</button>
                                </div>
                            </div>
                        )))
                        : (
                            <p>No items in cart</p>
                        )}
                </div>
            </div>
        </div>
    );
}

export default SideBar;