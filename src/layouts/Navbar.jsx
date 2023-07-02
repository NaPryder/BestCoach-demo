import { Link, NavLink, useNavigate } from 'react-router-dom'
import logo from '@/assets/logo-full.png'
import Button from '@/components/Button'
import Menubar from '@/Icons/Menubar'

import { Link as ScrollLink } from 'react-scroll'

export default function Navbar() {
  const navigate = useNavigate()

  function scrollToComponent() {
    console.log('scroll to :>> ')
  }
  return (
    <div className="nav-container">
      <Link to="/" reloadDocument>
        <img className="logo" src={logo} alt="logo" />
      </Link>

      <div className="menu-container">
        <ScrollLink
          className="nav-link"
          to="section-discover-mentor"
          smooth={true}
          offset={-50}
          duration={300}
          onClick={() => scrollToComponent()}
        >
          Find Mentor
        </ScrollLink>
        <NavLink className="nav-link" to="/mentor" reloadDocument>
          Become a mentor
        </NavLink>
        <NavLink className="nav-link" to="/browse-programs">
          Browse programs
        </NavLink>
        <NavLink className="nav-link" to="how-it-works">
          How it works
        </NavLink>
        <NavLink className="nav-link" to="/about-us">
          About Us
        </NavLink>
        <Button primary={false} onClick={() => navigate('/signin', { replace: true })}>
          Sign in
        </Button>
        <div className="menu-bar">
          <Menubar width="25px" height="12px" />
        </div>
      </div>
    </div>
  )
}
