import React from 'react'
import women from '@/assets/homeSection4_desktop.png'
import Check from '@/Icons/Check'
const HomeSection4 = () => {
  const items = [
    {
      title: 'Select a program',
      detail:
        'Answer 3 simple questions and let our platform handpick the perfect mentorship program tailored to your needs.',
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
    <section className="section-how-to-get-start">
      <div className="how-to-get-start">
        <h2>How to get started?</h2>
        {items.map((item, index) => {
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
          <Check width="17px" height="12px" className="check" />
          30 days refund available
        </p>
      </div>
      <div className="person-image-container">
        <img src={women} alt="person-image" />
      </div>
    </section>
  )
}

export default HomeSection4
