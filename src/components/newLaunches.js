import axios from 'axios';


const Launches = () => {
    
    const shoes = [{
        name: 'Crossover Brogues',
        img: 'crossover-brogues.png',
        price: 'Rs 2,699'
    },
    {
        name: 'Luxe Brogues',
        img: 'luxe-brogues.png',
        price: 'Rs 2,999'
    },
    {
        name: 'The Derbies',
        img: 'derbies.png',
        price: 'Rs 2,999'
    },
    {
        name: 'Light Trainers',
        img: 'trainers.png',
        price: 'Rs 1,999'
    }
    ]


    const addToCart = async (shoe) => {
        const userString = localStorage.getItem('user');

        if (!userString) {
            console.error('User not logged in');
            // Optionally, redirect to login page or show a message to the user
            return;
        }
        
        const user = JSON.parse(userString);
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
        <div className="shoes">
            <p className="shoeHeading">New Launches</p>

            <div className="shoeCards">
                {shoes.map((shoe, index) => (
                    <div key={index} className="shoe">
                        <img className="shoeImg" src={shoe.img}></img>
                        <div className="shoeDescription">
                            <p className="shoeName">{shoe.name}</p>
                            <p>{shoe.price}</p>
                            <button class="button-28" role="button" onClick={() => {
                                addToCart(shoe);
                            }
                            }>ADD TO CART</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Launches;