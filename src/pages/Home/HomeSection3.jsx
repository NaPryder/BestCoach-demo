import React from 'react'
// import men from '@/assets/homeSection3_desktop.png'
import men from '@/assets/homeSection3_mobile.png'
import TipDetail from './TipDetail'

const HomeSection3 = () => {
  return (
    <section className="section-expert-tips">
      <div className="person-image-container">
        <img src={men} alt="person-image" />
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
    </section>
  )
}

export default HomeSection3
