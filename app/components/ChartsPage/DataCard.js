import React, { Component } from 'react'
import { getChartAPIName } from 'helpers/charts'

export default class DataCard extends Component {
  constructor(props) {
    super(props)

    this.handleCardClick = this.handleCardClick.bind(this)
  }

  handleCardClick(event) {
    const { dataTitle, index, activeSection, updateChartName, updateActiveDataCard } = this.props
    const chartName = getChartAPIName(dataTitle)
    const activeDataCard = `${activeSection}-${index}`

    updateActiveDataCard(activeDataCard)
    updateChartName(chartName)
  }

  componentDidMount() {
    const { activeSection, dataTitle, updateActiveDataCard, updateChartName } = this.props
    const chartName = getChartAPIName(dataTitle)
    const activeDataCard = `${activeSection}-${0}`

    updateActiveDataCard(activeDataCard)
    updateChartName(chartName)
  }

  render() {
    const { dataTitle, dataValue, activeSection, activeDataCard, index } = this.props
    const isActive = activeDataCard === `${activeSection}-${index}`

    return (
      <div onClick={this.handleCardClick} className={`data-card active-${isActive}`}>
        <div className="data-card__title">{dataTitle}</div>
        <div className="data-card__value">{dataValue}</div>
      </div>
    )
  }
}
