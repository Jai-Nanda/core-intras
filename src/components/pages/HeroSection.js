import { Link } from 'react-router-dom'
import img from './updated_hero1.png'
import './HeroSection.css'
function HeroSection() {
  return (
    <>
      <div className="container">
        <div className="hero-flex">
          <div className="content">
            <h1 className="heroHeading">Sethi Stores</h1>
            <p className="desc">We provide with best uniforms at a cheap rate with lots of Love !</p>
            <div clasName="button">
            <Link to="/shop"><button className="btn-shop">Shop Now</button></Link>
            <Link to="/about" className="link-learn">Learn More <span><i class="fas fa-arrow-right"></i></span></Link>
          </div>
            </div>
          <div className="hero_imgs">
            <img src={img} className="svg" alt="loading"></img>
          </div>
          </div>
      </div>
      
      </>
  )
}

export default HeroSection;