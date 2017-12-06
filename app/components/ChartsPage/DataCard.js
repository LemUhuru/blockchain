import React, { Component } from 'react'

export default class DataCard extends Component {

  render() {
    const { dataTitle, dataValue, isActive } = this.props

    return (
      <div className={`data-card active-${isActive}`}>
        <div className="data-card__title">{dataTitle}</div>
        <div className="data-card__value">{dataValue}</div>
      </div>
    )
  }
}
