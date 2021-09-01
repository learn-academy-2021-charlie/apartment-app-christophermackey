import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Header extends Component {
  render() {
    const {
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
      <>
        <header>
          <NavLink to="/">
            <h1>Apartment Finder SD</h1>
          </NavLink>
          <div className="nav-bar">
            <ul>
              <NavLink to="/apartmentIndex" className="nav-link">View All Apartments</NavLink>
            </ul>
            <ul className="header-links">
              {logged_in &&
                <a href={sign_out_route} className="nav-link">Sign Out</a>
              }
              {!logged_in &&
                <a href={sign_in_route} className="nav-link">Sign In</a>
              }
            </ul>
          </div>
        </header>
      </>
    )
  }
}
export default Header