import React from 'react'
import Step from './Step'
import stepSetupProfile from '@images/home-mentor-how-to-get-start/step-setup-profile.webp'
import stepJoinSession from '@images/home-mentor-how-to-get-start/step-join-session.webp'
import stepReceiveBonus from '@images/home-mentor-how-to-get-start/step-receive-bonus.webp'
import vector1 from '@images/home-mentor-how-to-get-start/Vector-1.webp'
import vector2 from '@images/home-mentor-how-to-get-start/Vector-2.webp'

const HowToGetStart = () => {
  return (
    <section id="section-how-to-get-start-mentor">
      <div className="section-content-container">
        <h2>How to get started?</h2>
        <p>Just a few steps before you start sharing your experience</p>
        <div className="step-container">
          <Step
            image={stepSetupProfile}
            stepNumber={1}
            title="Set up profile"
            description="Sign up & take intake survey. Publish your profile."
          />
          <Step
            image={stepJoinSession}
            stepNumber={2}
            title="Join a session"
            description="Confirm mentorship. Join a 30-min Skype session"
          />
          <Step
            image={stepReceiveBonus}
            stepNumber={3}
            title="Receive bonuses"
            description="Track your mentee's progress. Receive mentorship bonuses"
          />
        </div>
        <div className="vector1">
          <img src={vector1} alt="vector1" />
        </div>
        <div className="vector2">
          <img src={vector2} alt="vector2" />
        </div>
      </div>
    </section>
  )
}

export default HowToGetStart
