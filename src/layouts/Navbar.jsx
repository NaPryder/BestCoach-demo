import { Link, NavLink, useNavigate } from 'react-router-dom'
import styles from './Navbar.module.scss'
import Button from '../components/Button'

export default function Navbar() {
  const navigate = useNavigate()

  return (
    <nav>
      <Link to="/">
        <img className={styles.logo} src="src/assets/horizontal_full_color.af0a2780.webp" alt="logo" />
      </Link>

      <NavLink className={styles.navLink} end to="">
        For Mentor
      </NavLink>
      <NavLink className={styles.navLink} to="/client">
        For Mentee
      </NavLink>
      <NavLink className={styles.navLink} to="/corporate">
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
