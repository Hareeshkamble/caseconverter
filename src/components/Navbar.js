import React from 'react'
import PropTypes from 'prop-types'

export default function navbar(props) {
  return (
    <>
    <div className='NAVV position-sticky'>
      <nav className={`position-sticky navbar navbar-expand-lg bg-${props.darkORlight} navbar-${props.darkORlight}`}>
  <div className="container-fluid position-sticky">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a className="navbar-brand" href="#">{props.Logo}</a>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/index.html">Home</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link active">{props.getintouch}</a>
        </li>
      </ul>
      <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggle} />
  <label class="form-check-label sun" for="flexSwitchCheckDefault">🌝</label>
</div>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
    </>
  )
}
navbar.propTypes={
  Logo:PropTypes.string,
  About :PropTypes.string ,
  getintouch:PropTypes.string
}
