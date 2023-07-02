import React from 'react'
import CountingReview from './CountingReview'
import Button from '@components/Button'
import Arrow from '@icons/Arrow'
import bg from '@images/home-hero/homeSection1.png'
import { menteeImages } from './data'
import { APP_SCREEN_WIDTH } from '@hooks/constant'
import OverLapingImages from '@components/OverLapingImages'
import useWindowResize from '@hooks/useWindowResize'
import StarRating from '@components/StarRating'

const SellingPoint = () => {
  const countHappyMentees = 292
  const ratingScore = 4.8
  const width = useWindowResize()

  const contents = {
    sellingPointTopic: 'Empower Students to Succeed',
  }

  return (
    <section id="section-selling-point">
      <div className="content-container">
        <div className="selling-point-content">
          <h1>{contents.sellingPointTopic}</h1>
          <p>
            Join our AI-powered career programs
            <br />
            Gain valuable insights from top industry professionals
          </p>
          <Button primary size="lg" onClick={() => (window.location.href = '#section-unique-selling-point')}>
            Explore more
            <Arrow direction="right" size="m" color="white" />
          </Button>
          <div className="reviews">
            <div className="happy-mentees">
              <OverLapingImages images={menteeImages} max={5} size={width <= APP_SCREEN_WIDTH.tablet ? 35 : 61} />
            </div>
            <div className="score-container">
              <CountingReview focusText={countHappyMentees}>
                <p className="score-title">Happy mentees</p>
              </CountingReview>
              <hr />
              <CountingReview focusText={`${ratingScore}/5`}>
                <span className="rating">
                  <StarRating score={ratingScore} size={12} id="star-rating1" />

                  <p className="score-title">Rating</p>
                </span>
              </CountingReview>
            </div>
          </div>
        </div>
      </div>
      <div className="background-image-container">
        <img className="section-bg" src={bg} alt="section-background" />
      </div>
      <div className="btn-job-title-and-company-container">
        <Button primary size="lg">
          Software Engineer <br /> Meta
        </Button>
        <Button primary size="lg">
          Product Manager <br /> Grab
        </Button>
      </div>
    </section>
  )
}

export default SellingPoint
