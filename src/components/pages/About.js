import React from 'react'
import img from './uniform2.webp'
import './About.css'
const About = () => {
    return (
        <>
        <div className="about">
            <div className="content_about">
                <h1 className="about_heading">Who are We ?</h1>
                <p className="text_about">A uniform is a type of clothing worn by members of an organization while participating in that organization's activity. Modern uniforms are most often worn by armed forces and paramilitary organizations such as police, emergency services, security guards, in some workplaces and schools and by inmates in prisons. In some countries, some other officials also wear uniforms in their duties; such is the case of the Commissioned Corps of the United States Public Health Service or the French prefects. For some organizations, such as police, it may be illegal for non members to wear the uniform.</p>
            </div>
            <div className="images">
                <img src={img} className="about_img" alt="loading"/>
            </div>
        </div>
        </>
    )
}

export default About
