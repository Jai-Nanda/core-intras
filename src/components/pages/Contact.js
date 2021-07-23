import React from 'react'
import './Contact.css'
const Contact = () => {
    return (
        <>
            <div className="main">
                <h1 className="about_heading">Contact Us</h1>
            <div className="contact">
              

                <div className="form">
                    <form action="https://formspree.io/f/xrgravad" method="POST">
                        <label name="name">Name</label>
                        <input type="text" placeholder="Peter Parker"/>
                        <label name="email">Email</label>
                        <input type="email" placeholder="peterparker@gmail.com"/>
                        <label name="message">Message</label>
                        <textarea name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea>
                        <button type="submit">Submit</button>
                    </form>
                    </div>
                    <div className="image">
                    <iframe title="bruh" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.794081442525!2d77.0452477146034!3d28.60595369203537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1ad327c996bf%3A0xc15d793aacb72697!2sDelhi%20Public%20School%2C%20Dwarka!5e0!3m2!1sen!2sin!4v1624378295723!5m2!1sen!2sin" className="map"></iframe>
                </div>
            </div>
            </div>
        </>
    )
}

export default Contact
