import logo from '@/assets/logo-full.png'

const Footer = () => {
  return (
    <footer>
      <section className="footer-container">
        <div className="footer-content">
          <img className="logo" src={logo} alt="logo" />
          <p>
            Make charitable giving easy. Support change makers to fundraise for a cause. Ensure charitable giving is
            accountable and impactful by verifying charities.{' '}
          </p>
        </div>
        <div className="footer-other-link">
          <div>
            <strong>Help</strong>
            <p>Terms of Use</p>
            <p>Privacy</p>
            <p>Policy</p>
            <p>Contact Us</p>
            <p>FAQ</p>
          </div>
          <div>
            <strong>Platform</strong>
            <p>Find mentors</p>
            <p>Become a mentor</p>
            <p>Blog</p>
          </div>
        </div>
      </section>
      <hr />
      <p className="copyright">Copyright © 2023</p>
    </footer>
  )
}

export default Footer
