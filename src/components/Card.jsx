import React from 'react'
import Tag from './Tag'
import Education from '@/icons/Education'
import Occupation from '@/icons/Occupation'
import PropTypes from 'prop-types'
import { APP_SCREEN_WIDTH } from '@hooks/constant'
import useWindowResize from '@hooks/useWindowResize'

const Card = ({ profile, ...props }) => {
  const width = useWindowResize()

  return (
    <div className="card">
      <div className="profile-image">
        <img src={profile.image} alt="profile" />
      </div>
      <div className="prodile-detail">
        <h3>{profile.name}</h3>
        <div className="detail education">
          <Education
            size={width <= APP_SCREEN_WIDTH.tablet ? 'sm' : 'm'}
            color="gray"
            shade="secondary"
            className="education-icon"
          />
          <p>{profile.education}</p>
        </div>

        <div className="detail occupation">
          <Occupation
            size={width <= APP_SCREEN_WIDTH.tablet ? 'sm' : 'm'}
            color="gray"
            shade="secondary"
            className="occupation-icon"
          />
          <p>{profile.occupation}</p>
        </div>
        <div className="tags">
          {profile.tags &&
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
