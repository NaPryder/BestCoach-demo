// import Button from '../../components/Button'
// import './Mentor.scss'

import Button from '@/components/Button'

export default function Mentor() {
  return (
    <>
      <Button className="default">Looking for a Mentor?</Button>
      <section className="home">
        <p>Join Our Network</p>
        <p>Become A Mentor</p>
        <div>
          <Button>Join As Mentor</Button>
          <Button className="sub">Explore More</Button>
        </div>
      </section>
    </>
  )
}
