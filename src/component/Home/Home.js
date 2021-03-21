import React, { useEffect, useState } from 'react';
import './Home.css';
import Data from '../../fakeData/Data.json'
import { useHistory } from 'react-router';
const Home = () => {
    const [carts, setCarts] = useState([]);
    useEffect(() => {
        setCarts(Data);
        // console.log(Data);
    },[])
    const history = useHistory();
    const buyNow = ()=> {
        history.push('/destination')
    }
    return (
        <div className="homeStyle d-flex justify-content-center container">
            {
                carts.map(cart =><div className="cart">
                                    <h3>{cart.catagory}</h3>
                                    <button onClick={buyNow}>BUY NOW</button>
                                    <h1>{cart.amount}</h1>
                                 </div>)
            }
        </div>
    );
};

export default Home;


