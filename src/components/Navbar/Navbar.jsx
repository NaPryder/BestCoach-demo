import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.scss'
import { routes } from '../../routes'

export default function Navbar() {
  let selectedClassname = 'nav-select'

  return (
    <nav>
      <Link to="/">
        <div>Logo image</div>
      </Link>
      {routes.map(menu => {
        return (
          <NavLink
            key={menu.id}
            end={menu.isHome}
            to={menu.to}
            className={e => (e.isActive ? selectedClassname : undefined)}
          >
            {menu.text}
          </NavLink>
        )
      })}
      {/* <NavLink end to="" className={e => (e.isActive ? selectedClassname : undefined)}>
        For Mentor
      </NavLink>
      <NavLink to="/client" className={e => (e.isActive ? selectedClassname : undefined)}>
        For Mentee
      </NavLink>
      <NavLink to="/coporate" className={e => (e.isActive ? selectedClassname : undefined)}>
        Corporate
      </NavLink>
      <NavLink to="/news" className={e => (e.isActive ? selectedClassname : undefined)}>
        News & Community
      </NavLink> */}
    </nav>
  )
}
