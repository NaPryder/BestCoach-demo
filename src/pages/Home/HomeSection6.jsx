import { mentors } from './data'
import React from 'react'
import Card from '@/components/Card'
import Button from '@/components/Button'
import Arrow from '@/Icons/Arrow'

const HomeSection6 = () => {
  function clickNext() {
    const cardContainer = [...document.getElementsByClassName('card-container')]

    cardContainer.forEach((item, i) => {
      let cardDimension = item.getBoundingClientRect()
      let containerWidth = cardDimension.width
      item.scrollLeft += containerWidth
    })
  }
  function clickPrev() {
    const cardContainer = [...document.getElementsByClassName('card-container')]
    cardContainer.forEach((item, i) => {
      let cardDimension = item.getBoundingClientRect()
      let containerWidth = cardDimension.width
      item.scrollLeft -= containerWidth
    })
  }
  return (
    <section className="section-discover-mentor">
      <div className="header">
        <h2>Discover mentors</h2>
        <div className="arrow" onClick={() => clickPrev()}>
          <Arrow direction="left" width={17} height={17} />
        </div>
        <div className="arrow" onClick={() => clickNext()}>
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
