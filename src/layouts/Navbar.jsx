import { Link, NavLink, useNavigate } from 'react-router-dom'
import './Navbar.scss'
import Button from '../components/Button'

export default function Navbar() {
  const navigate = useNavigate()

  return (
    <nav>
      <Link to="/">
        <img className="logo" src="src/assets/horizontal_full_color.af0a2780.webp" alt="logo" />
      </Link>

      <NavLink className="nav-link" end to="">
        For Mentor
      </NavLink>
      <NavLink className="nav-link" to="/client">
        For Mentee
      </NavLink>
      <NavLink className="nav-link" to="/corporate">
        Corporate
      </NavLink>
      {/* <NavLink to="/news">News & Community</NavLink> */}

      <div>
        <Button className="sub" onClick={() => navigate('/', { replace: true })}>
          Login
        </Button>
        <Button onClick={() => navigate('/', { replace: true })}>Join as Mentor</Button>
      </div>
    </nav>
  )
}
