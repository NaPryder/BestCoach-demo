import React from 'react'
import CheckItem from './CheckItem'
import Button from '@/components/Button'
import ArrowRight from '@/Icons/ArrowRight'
import ArrowRightOld from '@/Icons/ArrowRightOld'
const HomeSection5 = () => {
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
      <Button primary size="lg">
        Browse all programs
        <ArrowRight width={17} height={14} />
        {/* <ArrowRight width="19px" height="16px" /> */}
        <ArrowRightOld />
      </Button>
    </section>
  )
}

export default HomeSection5
