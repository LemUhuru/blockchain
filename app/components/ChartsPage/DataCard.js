import React, { Component } from 'react'
import { getChartAPIName } from 'helpers/charts'

export default class DataCard extends Component {
  constructor(props) {
    super(props)

    this.handleCardClick = this.handleCardClick.bind(this)
  }

  handleCardClick(event) {
    const { dataTitle, updateChartName, updateActiveDataCard } = this.props
    const chartName = getChartAPIName(dataTitle)

    updateActiveDataCard(dataTitle)
    updateChartName(chartName)
  }

  render() {
    const { dataTitle, dataValue, activeDataCard } = this.props
    const isActive = activeDataCard === dataTitle

    return (
      <div onClick={this.handleCardClick} className={`data-card active-${isActive}`}>
        <div className="data-card__title">{dataTitle}</div>
        <div className="data-card__value">{dataValue}</div>
      </div>
    )
  }
}
