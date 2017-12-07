import React, { Component } from 'react'

export default class CurrencyStats extends Component {

  render() {
    const { index, activeSection, handleNavClick } = this.props
    const isActive = activeSection === index

    return (
      <li className="nav-item">
        <a onClick={e => handleNavClick(e, index)} className={`nav-link active-${isActive}`} href="">
          Currency Statistics
        </a>
      </li>
    )
  }
}
