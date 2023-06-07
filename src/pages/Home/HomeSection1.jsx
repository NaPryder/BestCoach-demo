import React from 'react'
import Button from '@components/Button'
import bg from '@/assets/-homeSection1_desktop.png'
// import bg from '@/assets/homeSection1_desktop.png'
import CountingReview from './CountingReview'
import OverLapingImages from '@/components/OverLapingImages'
import Star from '@/Icons/Star'
import ArrowRight from '@/Icons/ArrowRight'

const HomeSection1 = () => {
  const images = [
    {
      image:
        'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    },
    {
      image:
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
    },
    {
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    },
  ]

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
          <Button primary>
            Browse mentors
            <ArrowRight width="13.5px" height="10.5px" />
          </Button>
          <div className="reviews">
            <div className="happy-mentees">
              <OverLapingImages images={images}></OverLapingImages>
            </div>
            <div className="score-container">
              <CountingReview focusText={countHappyMentees}>
                <p className="score-title">Happy mentees</p>
              </CountingReview>
              <hr />
              <CountingReview focusText={`${ratingScore}/5`}>
                <span className="rating">
                  {getRatingStar(ratingScore)}
                  {/* <Star width="14px" height="13px" className="star-fill" />
                  <Star width="14px" height="13px" className="star-fill" />
                  <Star width="14px" height="13px" className="star-fill" />
                  <Star width="14px" height="13px" className="star-fill" />
                  <Star width="14px" height="13px" className="star-empty" /> */}
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
