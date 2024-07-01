import axios from 'axios';

const Movers = () => {

    const shoe = {
        name: 'The Movers',
        img: 'movers.png',
        price: 'Rs 1,999',
        color:'Black'
    }

    const addToCart = async (shoe) => {
        const userString = localStorage.getItem('user');
        const user = JSON.parse(userString);
        console.log(user);
        const token = user.token; // Assuming the token is stored in the user object
    
        if (!token) {
            console.error('No authentication token found');
            return;
        }
    
        try {
            const response = await axios.post('http://localhost:4000/cart/add', 
                shoe, // Just send the shoe data, no need to include user information
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
            
            console.log('Item added to cart:', response.data);
            // You can add any UI updates or notifications here
        } catch (error) {
            console.error('Error adding item to cart:', error.response?.data || error.message);
            // Handle error (e.g., show an error message to the user)
        }
    };


    return (
        <div className="derbies">
            <div className="derbies-img">
                <img src={shoe.img} className="derbies-image"></img>
            </div>
            <div className="derbies-info">
            <h1>{shoe.name}</h1>
            <h2>{shoe.price}</h2>
            <p>Inclusive of all Taxes</p>
            <p>Color:{shoe.color}</p>
            <button class="button-28" role="button" onClick={() => addToCart(shoe)}>ADD TO CART</button>
            </div>
        </div>
    );
}

export default Movers;