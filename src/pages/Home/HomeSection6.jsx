import { mentors } from './data'
import React from 'react'
import Card from '@/components/Card'
import Button from '@/components/Button'
import Arrow from '@/Icons/Arrow'

const HomeSection6 = () => {
  return (
    <section className="section-discover-mentor">
      <div className="header">
        <h2>Discover mentors</h2>
        <div className="arrow">
          <Arrow direction="left" width={17} height={17} />
        </div>
        <div className="arrow">
          <Arrow direction="right" width={17} height={17} />
        </div>
      </div>
      <div className="card-container">
        {mentors.map(mentor => (
          <Card profile={mentor} key={mentor.id} />
        ))}
      </div>

      <Button primary size="lg">
        See all mentors
        <Arrow direction="right" width={13.5} height={10.5} />
      </Button>
    </section>
  )
}

export default HomeSection6
