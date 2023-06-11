import React, { useEffect } from 'react'
import { getCompany, menteeImages, meteeReviews } from './data'
import OverLapingImages from '@/components/OverLapingImages'
import Button from '@/components/Button'
import CheckItem from './CheckItem'
import MenteeReview from './MenteeReview'
import useWindowResize from '@/hooks/useWindowResize'

const HomeSection7 = () => {
  const images = getCompany()
  const [height, width] = useWindowResize()

  return (
    <section className="section-mentee-review">
      <h2>Hear from happy mentees</h2>
      <div className="mentee-container">
        {meteeReviews
          .slice(0, 3)
          .map(mentee => <MenteeReview key={mentee.id} mapMenteeReview={mentee} />)
          .reduce((prev, curr, i) => [prev, <hr key={i + 100} />, curr])}
      </div>
      <div className="world-class-company">
        <p>Mentors coming from world class companies</p>
        <div className="company-logos">
          {images.map((img, i) => (
            <div className="company" key={i}>
              <div className="image-container">
                <img src={img} alt="world-company-logo" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="want-to-be-mentor">
        <div className="topic">
          <h2>Want to be a mentor?</h2>
          <div className="why-to-join">
            <CheckItem topic="Join for free" iconBoxClassname="box" iconClassname="check" width="11px" height="7px" />
            <CheckItem
              topic="Earn mentorship bonus"
              iconBoxClassname="box"
              iconClassname="check"
              width="11px"
              height="7px"
            />
          </div>
        </div>
        <div className="registration">
          <OverLapingImages images={menteeImages} max={4} />
          <Button primary={width < 768 ? true : false} size="default" className="">
            Join as mentor
          </Button>
        </div>
      </div>
    </section>
  )
}
export default HomeSection7
