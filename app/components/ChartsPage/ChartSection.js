import React, { Component } from 'react'
import { getChartImageURL } from 'helpers/charts'

export default class ChartSection extends Component {

  render() {
    const { chartName, description } = this.props
    const chartImg = getChartImageURL(chartName)

    return (
      <div className="chart-section">
        <div className="chart-description">
          {/* {description} */}
          The total number of bitcoins that have already been mined.
        </div>
        <div className="chart-container">
          <img className="chart-section__img" src={chartImg} alt="blockchain chart" />
        </div>
        <input className="btn btn-primary btn-lg chart-section__btn" type="button" value="View Chart" />
      </div>
    )
  }
}
