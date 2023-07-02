import React from 'react'
import HighlightAction from '@components/HighlightAction'
import CheckItem from '@components/CheckItem'
import Button from '@components/Button'
// import imageTeam1 from '@images/team/prof_k.png'
// import imageTeam2 from '@images/team/prof_pr.png'
import imageTeam3 from '@images/teams/dev_nc.png'
import imageAvatar from '@images/teams/avatar.png'

import IconWraper from '@/icons/IconWraper'
import { MapIconStylingTemplate } from '@/icons/iconOptions'
import LinkedIn from '@/Icons/LinkedIn'

const OurTeam = () => {
  const teams = [
    {
      image: imageAvatar,
      name: 'Kuriko Iwai',
      roles: 'Founder & CEO',
      linkedinUrl: 'https://www.linkedin.com/in/k-i-i/',
    },
    {
      image: imageAvatar,
      name: 'Priscilla Ambrose',
      roles: 'Chief Client Officer',
      linkedinUrl: 'https://www.linkedin.com/in/priscilla-ambrose/',
    },
    {
      image: imageAvatar,
      name: 'Nachai Paramesthanakorn',
      roles: 'Software Engineer',
      linkedinUrl: 'https://www.linkedin.com/in/nachai-prm/',
    },
  ]

  return (
    <section id="section-about-us-our-team">
      <div className="section-content-container">
        <h2>Meet our team</h2>
        <div className="our-team">
          {teams.map((team, i) => (
            <div className="team-member" key={i}>
              <div className="team-member-image-container">
                <img src={team.image} alt="team-1" />
              </div>
              <p className="team-member-name">{team.name}</p>
              <p className="team-member-role">{team.roles}</p>
              <a href={team.linkedinUrl}>
                <LinkedIn color="gray" size="lg" shade="secondary" />
              </a>
            </div>
          ))}
        </div>
        <HighlightAction
          id="about-us-highlight"
          backgroundColor="maroon"
          topic="Do you represent an educational organisation?"
          topicColor="white"
          keywordComponent={
            <div className="about-us-keword-items">
              <CheckItem
                topic="Get onboarded by our team"
                size="sm"
                iConColor="maroon"
                backgroundColor="maroon"
                boxColor="white"
                titleColor="white"
              />
              <CheckItem
                topic="Guided support"
                size="sm"
                iConColor="maroon"
                backgroundColor="maroon"
                boxColor="white"
                titleColor="white"
              />
            </div>
          }
          actionComponent={
            <div className="about-us-action-buttons">
              <Button primary={false} size="m" className="">
                Partner with us
              </Button>
              <Button primary={false} size="m" className="">
                Explore more
              </Button>
            </div>
          }
        />
      </div>
    </section>
  )
}

export default OurTeam
