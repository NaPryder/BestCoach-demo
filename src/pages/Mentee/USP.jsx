import Flag from '@icons/Flag'
import People from '@icons/People'
import Video from '@icons/Video'
import UspWraper from '@components/UspWraper'
import React from 'react'

const USP = () => {
  const contents = [
    {
      icon: 'people',
      topic: 'Accessible Mentors',
      description: 'Check mentor availability online, book sessions instantly, and free up your time from scheduling.',
      render: <People className="usp-icon" size="m" color="maroon" />,
    },
    {
      icon: 'video',
      topic: 'Personal Session',
      description: 'Experience tailored personal, sessions, 1-on-1 conversations with mentors who know you.',
      render: <Video className="usp-icon" size="m" color="maroon" />,
    },
    {
      icon: 'flag',
      topic: 'Result or Refund',
      description:
        'Receive continuous feedback from mentors who understand your goals. Refunds if you are dissatisfied with the outcome.',
      render: <Flag className="usp-icon" size="m" color="maroon" />,
    },
  ]

  return (
    <section id="section-unique-selling-point">
      <div className="usp-container">
        {contents.map((content, i) => (
          <UspWraper key={i} content={content} size="m"></UspWraper>
        ))}
      </div>
    </section>
  )
}

export default USP
