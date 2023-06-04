import { Link, NavLink, useNavigate } from 'react-router-dom'
// import '@styles/layouts/Navbar.module.scss'
import logo from '@/assets/logo-full.png'
import Button from '@/components/Button'

export default function Navbar() {
  const navigate = useNavigate()

  return (
    <nav>
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>

      <div className="menu-container">
        <NavLink className="nav-link" end to="/client">
          Find Mentor
        </NavLink>
        <NavLink className="nav-link" to="/">
          Become a mentor
        </NavLink>
        <NavLink className="nav-link" to="/browse-programs">
          Browse programs
        </NavLink>
        <NavLink className="nav-link" to="/how-it-works">
          How it works
        </NavLink>
        <NavLink className="nav-link" to="/faq">
          FAQ
        </NavLink>
        {/* <NavLink to="/news">News & Community</NavLink> */}

        <Button primary={false} onClick={() => navigate('/', { replace: true })}>
          Sign in
        </Button>
      </div>
    </nav>
  )
}
