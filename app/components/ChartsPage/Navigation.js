import React, { Component } from 'react'
import PopularStats from './Navigation/PopularStats'
import CurrencyStats from './Navigation/CurrencyStats'
import { POPULAR_INDEX, CURRENCY_INDEX } from '../../containers/ChartsPage/reducer'

class Navigation extends Component {
  constructor(props) {
    super(props)

    this.handleNavClick = this.handleNavClick.bind(this)
  }

  handleNavClick(event, index) {
    event.preventDefault()
    this.props.updateActiveSection(index)
  }

  render() {
    const { activeSection } = this.props

    return (
      <div className="main-nav">
        <ul className="nav flex-column">
          <PopularStats
            index={POPULAR_INDEX}
            activeSection={activeSection}
            handleNavClick={this.handleNavClick}
          />
          <CurrencyStats
            index={CURRENCY_INDEX}
            activeSection={activeSection}
            handleNavClick={this.handleNavClick}
          />
        </ul>
      </div>
    )
  }
}

export default Navigation
