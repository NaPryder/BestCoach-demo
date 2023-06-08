import React from 'react'
import { getCompany, menteeImages } from './data'
import Check from '@/Icons/Check'
import OverLapingImages from '@/components/OverLapingImages'
import Button from '@/components/Button'
import CheckItem from './CheckItem'
const HomeSection7 = () => {
  const images = getCompany()

  return (
    <section className="section-mentee-review">
      <h2>Hear from happy mentees</h2>
      <div className="mentee-container">
        <div className="mentee">
          <div className="mentee-image">
            <img src="" alt="" />
          </div>
          <p className="reviews">
            “I found an amazing mentor who guided me every step of the way. Their insights and support were invaluable,
            and I successfully landed my dream job.”
          </p>
          <p className="name">Jerome Bell</p>
          <p className="occupation">Product Manager</p>
        </div>
      </div>
      <div className="world-class-company">
        <p>Mentors coming from world class companies</p>
        <div className="company-logos">
          {images.map((img, i) => (
            <div className="company" key={i}>
              <div className="image-container">
                <img src={img} alt="" />
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
          <Button primary={false} size="default" className="">
            Join as mentor
          </Button>
        </div>
      </div>
    </section>
  )
}
export default HomeSection7
