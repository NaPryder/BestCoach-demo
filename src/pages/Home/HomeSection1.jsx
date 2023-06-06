import React from 'react'
import Button from '@components/Button'
import bg from '@/assets/homeSection1_desktop.png'
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
  return (
    <section
      className="section-selling-point"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
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
            <CountingReview focusText="299">
              <p>Happy mentees</p>
            </CountingReview>
          </div>
          <hr />
          <CountingReview focusText="4.8/5">
            <span className="rating">
              <Star width="14px" height="13px" className="star-fill" />
              <Star width="14px" height="13px" className="star-fill" />
              <Star width="14px" height="13px" className="star-fill" />
              <Star width="14px" height="13px" className="star-fill" />
              <Star width="14px" height="13px" className="star-empty" />
              <p>Rating</p>
            </span>
          </CountingReview>
        </div>
      </div>
    </section>
  )
}

export default HomeSection1
