import React, { Component } from 'react'

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container-fluid">
        <nav className="charts-page__header navbar navbar-light">
          <a className="navbar-brand" href="#">BLOCKCHAIN</a>
        </nav>
      </div>
    )
  }
}

export default Header
