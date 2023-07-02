import React from 'react'
import { ourImpacts } from './data'

const OurImpact = () => {
  return (
    <div className="subsection-our-impact">
      <h2>Our impact to Southeast Asia</h2>
      <div className="our-impact">
        <div className="impact-number">
          <p>{ourImpacts.menteeOnboard}</p>
          <p>Mentees onboard</p>
        </div>
        <hr />
        <div className="impact-number">
          <p>{ourImpacts.mentorOnboard}</p>
          <p>Mentors onboard</p>
        </div>
        <hr />
        <div className="impact-number">
          <p>{ourImpacts.companyCollaboration}</p>
          <p>Company collaboration</p>
        </div>
      </div>
    </div>
  )
}

export default OurImpact
