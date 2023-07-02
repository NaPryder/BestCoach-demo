import React from 'react'
import Button from '@components/Button'
import OverLapingImages from '@components/OverLapingImages'
import { mentorImages } from './data'
import Arrow from '@icons/Arrow'
import heroes from '@images/home-hero/home-mentor-heroes.webp'
import vectorBackground from '@images/home-hero/home-metor-vector-background.webp'
import useWindowResize from '@hooks/useWindowResize'
import { APP_SCREEN_WIDTH } from '@hooks/constant'

const HeroSection = () => {
  const mentorCount = 48
  const width = useWindowResize()

  return (
    <section
      id="section-home-mentor"
      style={{ backgroundImage: `url(${vectorBackground})`, backgroundRepeat: 'no-repeat' }}
    >
      <div className="section-content-container">
        <div className="join-our-network">
          <div className="content-title">
            <h1>
              Join our network, <br />
              become a mentor today
            </h1>
            <p>Share your valuable insights, and support with motivated mentees.</p>
          </div>
          <Button primary size="lg">
            Sign up as mentor
            <Arrow direction="right" size="m" />
          </Button>
          <div className="mentor-joined">
            <OverLapingImages
              images={mentorImages}
              max={5}
              size={width <= APP_SCREEN_WIDTH.tablet ? 43 : 60.5}
              overlapSize={width <= APP_SCREEN_WIDTH.tablet ? 12 : 18}
            />
            <div>
              <p className="count">{mentorCount}</p>
              <p>Mentors have joined</p>
            </div>
          </div>
        </div>
        <div className="mentor-heroes-container">
          <img src={heroes} alt="mentor-heroes" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
