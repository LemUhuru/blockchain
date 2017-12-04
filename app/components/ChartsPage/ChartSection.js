import { React, Component } from 'react'

class ChartSection extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { description } = this.props

    return (
      <div className="chart-section">
        <div className="chart-description">
          {description}
        </div>
        <div className="chart-container">
          <img src={chartPng} alt="blockchain chart" />
        </div>
        <input type="button" value="View Chart" />
      </div>
    )
  }
}

export default ChartSection
