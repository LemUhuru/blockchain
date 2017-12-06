import React, { Component } from 'react'

class Navigation extends Component {
  constructor(props) {
    super(props)
  }

  handleOnClick() {

  }

  render() {
    return (
      <div className="main-nav">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" href="">Popular</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">Currency Statistics</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Navigation
