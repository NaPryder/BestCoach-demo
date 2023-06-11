import React, { lazy, Suspense } from 'react'
import Button from '@components/Button'
import bg from '@/assets/homeSection1_desktop.png'
import CountingReview from './CountingReview'
import Star from '@/Icons/Star'
import { menteeImages } from './data'
import Arrow from '@/Icons/Arrow'

const OverLapingImages = lazy(() => import('@/components/OverLapingImages'))

const HomeSection1 = () => {
  const countHappyMentees = 292
  const ratingScore = 4.8

  function getRatingStar(ratingScore) {
    const star = Math.floor(ratingScore)
    return Array(5)
      .fill(0)
      .map((_, i) => {
        return <Star key={i} width="14px" height="13px" className={i + 1 <= star ? 'star-fill' : 'star-empty'} />
      })
  }

  return (
    <section
      className="section-selling-point"
      // style={{
      //   backgroundImage: `url(${bg})`,
      // }}
    >
      <div className="content-container">
        <div className="selling-point-content">
          <h1>Unlock Your Career Potential with BestCoach</h1>
          <p>
            Gain valuable guidance, insights, and support from industry professionals who are passionate about your
            success.
          </p>
          <Button primary size="lg">
            Browse mentors
            <Arrow direction="right" width={13.5} height={10.5} />
          </Button>
          <div className="reviews">
            <div className="happy-mentees">
              <Suspense fallback={'loading'}>
                <OverLapingImages images={menteeImages}></OverLapingImages>
              </Suspense>
            </div>
            <div className="score-container">
              <CountingReview focusText={countHappyMentees}>
                <p className="score-title">Happy mentees</p>
              </CountingReview>
              <hr />
              <CountingReview focusText={`${ratingScore}/5`}>
                <span className="rating">
                  {getRatingStar(ratingScore)}

                  <p className="score-title">Rating</p>
                </span>
              </CountingReview>
            </div>
          </div>
        </div>
      </div>
      <div className="image-container">
        <img className="section-bg" src={bg} alt="section-background" />
      </div>
    </section>
  )
}

export default HomeSection1
