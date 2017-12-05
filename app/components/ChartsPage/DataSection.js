import React, { Component } from 'react'
import DataCard from './DataCard'

class DataSection extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { dataTitle, dataValue } = this.props

    return (
      <div className="data-section">
        <ul className="data-section__list">
          <li>Data</li>
          <li>Currency Statistics</li>
          <li>Block Details</li>
          <li>Mining Information</li>
          <li>Network Activity</li>
          <li>Wallet Activity</li>
        </ul>
      </div>
    )
  }
}

export default DataSection
