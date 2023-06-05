import React from 'react'
import men from '@/assets/homeSection3_desktop.png'
import arrowObject from '@/assets/arrow-bg.png'
import vectorObject from '@/assets/Vector4.png'
import TipDetail from './TipDetail'

const HomeSection3 = () => {
  return (
    <section className="section-expert-tips">
      <div className="left-image">
        <div className="circle" />
        <img className="main" src={men} alt="main" />
        <img className="arrow" src={arrowObject} alt="arrow-object" />
        <img className="vector" src={vectorObject} alt="vector-object" />
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
