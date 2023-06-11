import React from 'react'
import CheckItem from './CheckItem'
import Button from '@/components/Button'
import Arrow from '@/Icons/Arrow'
import useWindowResize from '@/hooks/useWindowResize'

const HomeSection5 = () => {
  const [height, width] = useWindowResize()

  return (
    <section className="section-things-you-can-learn">
      <div className="heading">
        <h2>Things you can learn</h2>
        <p>With lots of unique blocks, you can easily build a page without coding.</p>
      </div>
      <div className="learning-item-container">
        <div>
          <CheckItem topic="Referral & Job Offer" />
        </div>
        <div>
          <CheckItem topic="Industry Insights" />
        </div>
        <div>
          <CheckItem topic="Career Counselling" />
        </div>
        <div>
          <CheckItem topic="Life Counselling" />
        </div>
        <div>
          <CheckItem topic="Professional Branding" />
        </div>
        <div>
          <CheckItem topic="Relationship Counselling" />
        </div>
        <div>
          <CheckItem topic="Career Planning" />
        </div>
        <div>
          <CheckItem topic="Mock Interview" />
        </div>
      </div>
      <Button primary size={width > 768 ? 'lg' : 'default'}>
        {width > 768 ? 'Browse all programs' : 'See all programs'}
        <Arrow direction="right" width={13.5} height={10.5} />
      </Button>
    </section>
  )
}

export default HomeSection5
