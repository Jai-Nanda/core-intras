import React from 'react'
import './Shop.css'
import shoe from './shoe1.jpg'
import sports from './sports.jpg'
import bag from './bag1.jpg'
import pouch from './pouch1.jpg'
import rain from './rain1.jpg'
import stationary from './stationary1.jpg'
import book from './book1.jpg'
import shirt from './uniform_1.png'
import toy from './toy1.png'
import illus from './shop1.png'
import { Link } from 'react-router-dom'
const Shop = () => {
    return (
        <>
            <div className="start">
                <div className="text">
                    <h1 className="shop">Let's Go Shopping</h1>
                    <p className="text"><Link to="/" className="shop_link">Click Here</Link> to get a Detailed information about each Product !</p>
                </div>
                <div className="imag">
                    <img src={illus} alt="loading"/>
                </div>
            </div>
            <div className="shop">
                <div className="cardflex">
                    <div className="card">
                        <img src={shirt} alt="loading" className="image1"/>
                        <h2 className="item_name">Shirt</h2>
                        <p className="price">Rs 1000</p>
                    </div>
                    <div className="card">
                        <img src={bag} alt="loading" className="image1"/>
                        <h2 className="item_name">Bags</h2>
                        <p className="price">Rs 2000</p>
                    </div>
                    <div className="card">
                        <img src={shoe} alt="loading" className="shoe"/>
                        <h2 className="item_name">Shoes</h2>
                        <p className="price">Rs 5000</p>
                    </div>
                </div>
                <div className="cardflex">
                    <div className="card">
                        <img src={book} alt="loading" className="shoe"/>
                        <h2 className="item_name">Books</h2>
                        <p className="price">Rs 10000</p>
                    </div>
                    <div className="card">
                        <img src={stationary} alt="loading" className="shoe"/>
                        <h2 className="item_name">Stationary</h2>
                        <p className="price">Rs 6000</p>
                    </div>
                    <div className="card">
                        <img src={pouch} alt="loading" className="shoe"/>
                        <h2 className="item_name">Pouches</h2>
                        <p className="price">Rs 500</p>
                    </div>
                </div>
                <div className="cardflex">
                    <div className="card">
                        <img src={rain} alt="loading" className="shoe"/>
                        <h2 className="item_name">Rain Coat</h2>
                        <p className="price">Rs 900</p>
                    </div>
                    <div className="card">
                        <img src={toy} alt="loading" className="shoe"/>
                        <h2 className="item_name">Toys</h2>
                        <p className="price">Rs 3000</p>
                    </div>
                    <div className="card">
                        <img src={sports} alt="loading" className="shoe"/>
                        <h2 className="item_name">Sports</h2>
                        <p className="price">Rs 1000</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shop
