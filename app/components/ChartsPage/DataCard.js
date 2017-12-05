import React, { Component } from 'react'

class DataCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { dataTitle, dataValue } = this.props

    return (
      <div className="data-card">
        <div className="data-card__title">{dataTitle}</div>
        <div className="data-card__value">{dataValue}</div>
      </div>
    )
  }

}

export default DataCard
