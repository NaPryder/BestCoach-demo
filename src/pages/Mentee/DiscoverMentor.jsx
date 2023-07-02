import React from 'react'
import { useNavigate } from 'react-router-dom'
import { virtualMentors } from './data'
import Card from '@components/Card'
import Button from '@components/Button'
import Arrow from '@icons/Arrow'
import { APP_SCREEN_WIDTH } from '@hooks/constant'
import useWindowResize from '@hooks/useWindowResize'

const DiscoverMentor = () => {
  const navigate = useNavigate()
  const width = useWindowResize()

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
    <section id="section-discover-mentor">
      <div className="section-content-container">
        <div className="header">
          <h2>Discover mentors</h2>
          <div className="arrow" onClick={() => clickPrev()}>
            <Arrow
              direction="left"
              size={width <= APP_SCREEN_WIDTH.tablet ? 'm' : 'lg'}
              color="gray"
              shade="secondary"
            />
          </div>
          <div className="arrow" onClick={() => clickNext()}>
            <Arrow
              direction="right"
              size={width <= APP_SCREEN_WIDTH.tablet ? 'm' : 'lg'}
              color="gray"
              shade="secondary"
            />
          </div>
        </div>
        <div className="card-container">
          {virtualMentors.map(mentor => (
            <Card profile={mentor} key={mentor.id} />
          ))}
        </div>

        <Button primary size="lg" onClick={() => navigate('/register/client/')}>
          See all mentors
          <Arrow direction="right" width={13.5} height={10.5} />
        </Button>
      </div>
    </section>
  )
}

export default DiscoverMentor
