import React, { Component } from 'react'
import DataCard from './DataCard'
import { blockchainStats } from 'tests/Data/ChartsPage'
import { navSections } from 'containers/ChartsPage/reducer'

class DataSection extends Component {

  render() {
    const { activeSection, activeDataCard, updateActiveDataCard, updateChartName } = this.props
    const activeStats = blockchainStats[navSections[activeSection]]

    return (
      <div className="data-section">
        <ul className="data-section__list nav flex-column">
          {Object.keys(activeStats).map((title, index) => {
            return (
              <li className="nav-item">
                <DataCard
                  dataTitle={title}
                  dataValue={activeStats[title]}
                  activeSection={activeSection}
                  activeDataCard={activeDataCard}
                  updateChartName={updateChartName}
                  updateActiveDataCard={updateActiveDataCard}
                  index={index}
                />
              </li>
          )})}
        </ul>
      </div>
    )
  }
}

export default DataSection
