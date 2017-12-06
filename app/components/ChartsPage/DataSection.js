import React, { Component } from 'react'
import DataCard from './DataCard'

const stats = {
  "Bitcoins in Circulation": "16,580,500",
  "Market Price": "$9,449",
  "Market Capitalization": "165,442,432",
  "USD Exchange Trade Vol.": "824,488,388",
}

class DataSection extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="data-section">
        <ul className="data-section__list nav flex-column">
          {Object.keys(stats).map((title, index) => {
          return (
            <li className="nav-item">
              <DataCard
                dataTitle={title}
                dataValue={stats[title]}
                isActive={index === 0}
              />
            </li>
          )})}
        </ul>
      </div>
    )
  }
}

export default DataSection
