import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer_text">
                    <p>Copyright © 2021 Sethi Stores All rights reserved.</p>
                </div>
                <div className="quick_links">
                    <Link to="/" className="footer_links">Home</Link>
                    <Link to="/about" className="footer_links">About</Link>
                    <Link to="/shop" className="footer_links">Shop</Link>
                    <Link to="/contact" className="footer_links">Contact</Link>
                </div>
                <div className="social">
                    <a href="https://youtu.be/dQw4w9WgXcQ"><i className="fab fa-instagram fa-2x"></i></a>
                    <a href="https://youtu.be/dQw4w9WgXcQ"><i className="fab fa-facebook fa-2x"></i></a>
                    <a href="https://youtu.be/dQw4w9WgXcQ"><i className="fab fa-twitter fa-2x"></i></a>
                </div>
            </div>
        </>
    )
}

export default Footer
