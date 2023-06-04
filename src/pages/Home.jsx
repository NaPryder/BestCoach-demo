import Button from '@/components/Button'
import React from 'react'

const Home = () => {
  return (
    <>
      <section className="section-selling-point">
        <div className="selling-point-content">
          <h1>Unlock Your Career Potential with BestCoach</h1>
          <p>
            Gain valuable guidance, insights, and support from industry professionals who are passionate about your
            success.
          </p>
          <Button primary>Browse mentors</Button>
          <div className="reveiws">
            <div className="happy-mentees">
              <div className="overlap-images">
                <img src="./src/assets/happy-mentee 1.png" alt="happy-mentee 1.png" />
                <img src="./src/assets/happy-mentee 1.png" alt="happy-mentee 1.png" />
                <img src="./src/assets/happy-mentee 1.png" alt="happy-mentee 1.png" />
              </div>
              <div className="mentee-number">
                <h1>291</h1>
                <p>Happy mentees</p>
              </div>
            </div>
            <hr />
            <div className="rating">
              <h1>4.8/5</h1>
              <p>Rating</p>
            </div>
          </div>
        </div>
        <img className="selling-point-bg" src="./src/assets/home-section-1-bg.png" alt="home-section-1-bg.png" />
      </section>
      <section>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nihil reiciendis placeat nemo ipsam libero
        inventore est odio beatae dignissimos ipsa velit quisquam tempora, maxime aut voluptatum necessitatibus harum
        minus?
      </section>
    </>
  )
}

export default Home
