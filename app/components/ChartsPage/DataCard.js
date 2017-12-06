import React, { Component } from 'react'

export default class DataCard extends Component {

  render() {
    const { dataTitle, dataValue, index } = this.props
    const isActive = index === 0

    console.log(index, 'indexxx')
    return (
      <div className={`data-card active-${isActive}`}>
        <div className="data-card__title">{dataTitle}</div>
        <div className="data-card__value">{dataValue}</div>
      </div>
    )
  }
}
