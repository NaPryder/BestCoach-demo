import React from 'react'
import hero from '@images/home-why-with-us/why-join-us-hero.webp'

const WhyJoinUs = ({ contents, ...props }) => {
  contents = [
    {
      title: 'Monetise your expertise',
      detail:
        'Leverage your expertise to guide and support our guests, earning rewards with each successful online session as your mentees progress.',
    },
    {
      title: 'Flexible Schedule',
      detail:
        'With us, you can share your professional experiences at your convenience, providing guidance and earning rewards for successful online sessions.',
    },
    {
      title: 'Quick and easy to start',
      detail:
        'Start sharing your expertise effortlessly and be rewarded for your successful online sessions, helping our guests navigate through ambiguity and achieve progress.',
    },
  ]
  return (
    <section id="section-why-join-us">
      <div className="section-content-container">
        <div className="why-join-us">
          <h2>Why join us?</h2>
          {contents.map((item, index) => {
            return (
              <div className="topic" key={index}>
                <span>
                  <hr />
                  <h3>
                    {index + 1}. {item.title}
                  </h3>
                </span>
                <p>{item.detail}</p>
              </div>
            )
          })}
        </div>
        <div className="person-image-container">
          <img src={hero} alt="hero" />
        </div>
      </div>
    </section>
  )
}

export default WhyJoinUs
