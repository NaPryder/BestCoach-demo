import React from 'react'
import imageHero1 from '@images/about-us/about-us-hero1.png'
import imageHero2 from '@images/about-us/about-us-hero2.png'
import imageRectBottom from '@images/about-us/about-us-rectangle-bottom.png'
import imageRectTop from '@images/about-us/about-us-rectangle-top.png'
import OurImpact from './OurImpact'

const OurBackground = () => {
  return (
    <section id="section-about-us-mission">
      <div className="section-content-container">
        <div className="about-us-title">
          <h1>About Us</h1>
          <p>
            Founded in 2023, we are a startup that helps young people achieve their full potential, regardless of their
            background, socioeconomic status, or any other factors beyond their control.
          </p>
          <br />
          <p>
            We believe that everyone has something unique to offer the world, and we are committed to providing them
            with the tools and resources they need to succeed.
          </p>
        </div>
        <OurImpact />

        <div className="hero-image-container">
          <div className="hero-side">
            <img src={imageHero1} alt="hero-left" />
          </div>
          <div className="hero-centers">
            <div>
              <img src={imageRectTop} alt="rect-top" />
            </div>
            <div>
              <img src={imageRectBottom} alt="rect-bottom" />
            </div>
          </div>
          <div className="hero-side">
            <img src={imageHero2} alt="hero-right" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurBackground
