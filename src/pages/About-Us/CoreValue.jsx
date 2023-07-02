import React from 'react'
import UspWraper from '@components/UspWraper'
import Scales from '@/icons/Scales'
import Computer from '@/icons/Computer'
import People from '@/icons/People'
import Trophy from '@/icons/Trophy'

const CoreValue = props => {
  const contents = [
    {
      icon: 'computer',
      topic: 'Innovation',
      description: 'We are always looking for new and innovative ways to help people learn and grow.',
      render: <Computer className="usp-icon" size="m" color="maroon" />,
    },
    {
      icon: 'people',
      topic: 'Collaboration',
      description: 'We believe that by working together, we can achieve more than we could ever achieve on our own.',
      render: <People className="usp-icon" size="m" color="maroon" />,
    },
    {
      icon: 'scales',
      topic: 'Integrity',
      description: 'We are committed to acting with honesty and transparency in everything we do.',
      render: <Scales className="usp-icon" size="m" color="maroon" />,
    },
    {
      icon: 'trophy',
      topic: 'Excellence',
      description: 'We strive to provide the highest quality of service to our customers.',
      render: <Trophy className="usp-icon" size="m" color="maroon" />,
    },
  ]
  return (
    <section id="section-about-us-core-value">
      <div className="section-content-container">
        <div className="core-value-title">
          <h2>Our core values</h2>
          <p>We strive to redefine the standard of excellence.</p>
        </div>

        <div className="core-value-container">
          {contents.map((content, i) => (
            <UspWraper key={i} content={content} size="lg"></UspWraper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoreValue
