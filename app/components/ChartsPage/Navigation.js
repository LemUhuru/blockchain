import React, { Component } from 'react'

class Navigation extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="main-nav">
        <h1 className="main-nav__title">Charts</h1>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" href="">Popular</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">Currency Statistics</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="">Block Details</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">Mining Information</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">Network Activity</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">Wallet Activity</a>
          </li> */}
        </ul>
      </div>
    )
  }
}

export default Navigation
