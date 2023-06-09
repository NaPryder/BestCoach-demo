import React from 'react'
import Tag from './Tag'
import Education from '@/Icons/Education'
import Occupation from '@/Icons/Occupation'
import PropTypes from 'prop-types'

const Card = ({ profile, ...props }) => {
  return (
    <div className="card">
      <div className="profile-image">
        <img src={profile.image} alt="profile-image" />
      </div>
      <div className="prodile-detail">
        <h3>{profile.name}</h3>
        <span>
          <Education />
          <p>{profile.education}</p>
        </span>

        <span>
          <Occupation />
          <p>{profile.occupation}</p>
        </span>
        <div className="tags">
          {profile?.tags &&
            profile.tags.map((tag, i) => {
              return <Tag key={i} title={tag.title} color={tag.color} />
            })}
        </div>
      </div>
      <div className="profile-footer">
        <div>
          <p className="key">Experience</p>
          <p>{profile.experience}</p>
        </div>
        <hr />
        <div>
          <p className="key">Industry</p>
          <p>{profile.industry}</p>
        </div>
        <hr />

        <div>
          <p className="key">Session</p>
          <p>{profile.session}</p>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  profile: PropTypes.object,
}

export default Card
