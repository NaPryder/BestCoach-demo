import React from 'react'
import women from '@images/home-hero/hero-women.png'
import Check from '@/icons/Check'
import useWindowResize from '@hooks/useWindowResize'
import { APP_SCREEN_WIDTH } from '@hooks/constant'

const HowToStart = ({ contents, ...props }) => {
  const width = useWindowResize()
  contents = [
    {
      title: 'Personalize a program',
      detail: 'Answer 3 simple questions and let our platform handpick the perfect program tailored to your needs.',
    },
    {
      title: 'Find your ideal mentor',
      detail:
        'Choose your perfect mentor and embark on an enriching journey. Switch or add mentors for a customised experience.',
    },
    {
      title: 'Pay as you progress',
      detail:
        "Believing in your success, we offer refunds if you don't progress to the next phase or meet your milestones. Your investment is aligned with your outcomes.",
    },
  ]
  return (
    <section id="section-how-to-get-start">
      <div className="section-content-container">
        <div className="how-to-get-start">
          <h2>How to get started?</h2>
          {contents.map((item, index) => {
            return (
              <div className="topic" key={index}>
                <h3>
                  {index + 1}. {item.title}
                </h3>
                <p>{item.detail}</p>
              </div>
            )
          })}
          <p className="refund-link">
            <Check size={width < APP_SCREEN_WIDTH.tablet ? 'sm' : 'm'} color="maroon" className="check" />
            30 days refund available
          </p>
        </div>
        <div className="person-image-container">
          <img src={women} alt="person" />
        </div>
      </div>
    </section>
  )
}

export default HowToStart
