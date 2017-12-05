import React, { Component } from 'react'
const chartPng = "https://api.blockchain.info/charts/thumbnail/total-bitcoins.png" // temp hardcode

class ChartSection extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { description } = this.props

    return (
      <div className="chart-section">
        <div className="chart-description">
          {/* {description} */}
          The total number of bitcoins that have already been mined.
        </div>
        <div className="chart-container">
          <img className="chart-section__img" src={chartPng} alt="blockchain chart" />
        </div>
        <input className="btn btn-primary btn-lg chart-section__btn" type="button" value="View Chart" />
      </div>
    )
  }
}
// #0150a5

export default ChartSection
