import React from 'react'
import { useNavigate } from 'react-router-dom'
import CheckItem from '@components/CheckItem'
import Button from '@components/Button'
import Arrow from '@/icons/Arrow'
import useWindowResize from '@hooks/useWindowResize'
import { APP_SCREEN_WIDTH } from '@hooks/constant'

const ThingYouCanOffer = ({ contents, ...props }) => {
  const navigate = useNavigate()
  const width = useWindowResize()

  contents = {
    topic: 'Things you can learn',
    sub: 'With lots of unique blocks, you can easily build a page without coding.',
    programCategories: [
      {
        name: 'Referral & Job Offer',
      },
      {
        name: 'Industry Insights',
      },
      {
        name: 'Career Counselling',
      },
      {
        name: 'Life Counselling',
      },
      {
        name: 'Professional Branding',
      },
      {
        name: 'Relationship Counselling',
      },
      {
        name: 'Career Planning',
      },
      {
        name: 'Mock Interview',
      },
    ],
  }

  return (
    <section id="section-program-category">
      <div className="section-content-container">
        <div className="section-heading">
          <h2>{contents.topic}</h2>
          <p>{contents.sub}</p>
        </div>
        <div className="learning-item-container">
          {contents.programCategories.map((program, i) => (
            <div key={i}>
              <CheckItem topic={program.name} size="m" backgroundColor="white" boxColor="pink" iConColor="maroon" />
            </div>
          ))}
        </div>
        <Button
          primary
          size={width >= APP_SCREEN_WIDTH.tablet ? 'lg' : 'default'}
          onClick={() => navigate('/register/client/')}
        >
          Join as mentor
          {width >= APP_SCREEN_WIDTH.tablet ? <Arrow direction="right" size="m" color="white" /> : ''}
        </Button>
      </div>
    </section>
  )
}

export default ThingYouCanOffer
