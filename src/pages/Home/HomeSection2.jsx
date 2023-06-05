import Flag from '@/Icons/Flag'
import People from '@/Icons/People'
import Video from '@/Icons/Video'

const HomeSection2 = () => {
  return (
    <section className="section-unique-selling-point">
      <div className="usp">
        <span className="icon">
          <People width="32px" height="20px" className="usp-icon" />
        </span>
        <h3>Accessible Mentors</h3>
        <p>Check mentor availability online, book sessions instantly, and free up your time from scheduling.</p>
      </div>
      <div className="usp">
        <span className="icon">
          <Video width="22px" height="26px" className="usp-icon" />
        </span>
        <h3>Personal Session</h3>
        <p>Experience tailored personal, sessions, 1-on-1 conversations with mentors who know you.</p>
      </div>
      <div className="usp">
        <span className="icon">
          <Flag width="24px" height="28px" className="usp-icon" />
        </span>

        <h3>Result or Refund</h3>
        <p>
          Receive continuous feedback from mentors who understand your goals. Refunds if you are dissatisfied with the
          outcome.
        </p>
      </div>
    </section>
  )
}

export default HomeSection2
