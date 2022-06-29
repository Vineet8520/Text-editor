import React from 'react'
import PropTypes from 'prop-types'
import {Link} from  "react-router-dom";
export default function Header(props) {
  return (
   
    <div>
        <nav className="navbar navbar-dark sticky-top bg-dark">
  <div className="container-fluid">
   
    <a className="navbar-brand" href='/'>{props.title}</a>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About us</Link>
            </li>
            <li>
              <Link to="/Cart">Cart</Link>
            </li>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
      <button type="submit" className="btn  btn-outline-primary">LogIn</button>
    </form>
  </div>
</nav>
    </div>
  
  )
}

Header.propTypes ={
  title: PropTypes.string
}