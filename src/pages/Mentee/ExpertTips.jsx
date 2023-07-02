import React from 'react'
import men from '@/images/home-hero/hero-men.png'
import TipDetail from './TipDetail'

const ExpertTips = () => {
  return (
    <section id="section-expert-tips">
      <div className="section-content-container">
        <div className="person-image-container">
          <img src={men} alt="happy-guy" />
        </div>
        <div className="expert-tips">
          <h2>Expert Tips Just One Click Away.</h2>
          <TipDetail headTitle="Expert mentorship">
            <p>
              Whether you have an upcoming interview or need guidance in product management, our platform puts you in
              touch with experienced mentors.
            </p>
          </TipDetail>
          <TipDetail headTitle="Engaging guidance">
            <p>
              Ask questions, explore new ideas, and discuss your professional growth with your mentor in online sessions
              at your convenience.
            </p>
          </TipDetail>
          <TipDetail headTitle="Progress orientated">
            <p>
              Unlock valuable insights and progress towards your goals with the guidance of your mentor. Start your
              mentorship journey today.
            </p>
          </TipDetail>
        </div>
      </div>
    </section>
  )
}

export default ExpertTips
