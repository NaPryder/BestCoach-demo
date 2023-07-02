import React from 'react'
import { useNavigate } from 'react-router-dom'
import { menteeImages } from './data'
import OverLapingImages from '@components/OverLapingImages'
import Button from '@components/Button'
import CheckItem from '@components/CheckItem'
import useWindowResize from '@hooks/useWindowResize'
import HighlightAction from '@components/HighlightAction'
import { APP_SCREEN_WIDTH } from '@hooks/constant'

const WantToBeMentor = () => {
  const navigate = useNavigate()
  const width = useWindowResize()

  return (
    <section id="section-want-to-be-mentor">
      <div className="section-content-container">
        <HighlightAction
          backgroundColor="yellow"
          topic="Want to be a mentor?"
          keywordComponent={
            <div className="home-mentee-keyword-items">
              <CheckItem
                topic="Join for free"
                size="sm"
                iConColor={width <= APP_SCREEN_WIDTH.tablet ? 'white' : 'yellow'}
                backgroundColor="yellow"
                boxColor="maroon"
              />
              <CheckItem
                topic="Flexible schedule"
                size="sm"
                iConColor={width <= APP_SCREEN_WIDTH.tablet ? 'white' : 'yellow'}
                backgroundColor="yellow"
                boxColor="maroon"
              />
              <CheckItem
                topic="Earn mentorship bonus"
                size="sm"
                iConColor={width <= APP_SCREEN_WIDTH.tablet ? 'white' : 'yellow'}
                backgroundColor="yellow"
                boxColor="maroon"
              />
            </div>
          }
          actionComponent={
            <div className="home-mentee-action-items">
              <OverLapingImages images={menteeImages} max={4} size={55} overlapSize={23} />
              <Button primary size="m" className="" onClick={() => navigate('/mentor/')}>
                Join as mentor
              </Button>
            </div>
          }
        />
      </div>
    </section>
  )
}

export default WantToBeMentor
