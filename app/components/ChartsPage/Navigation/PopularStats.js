import React, { Component } from 'react'

export default class PopularStats extends Component {

  render() {
    const { index, activeSection, handleNavClick } = this.props
    const isActive = activeSection == index

    return (
      <li className="nav-item">
        <a onClick={(e) => { handleNavClick(e, index) }} className={`nav-link active-${isActive}`} href="">
          Popular Stats
        </a>
      </li>
    )
  }
}
