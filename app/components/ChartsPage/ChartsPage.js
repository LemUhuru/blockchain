import React, { Component } from 'react'
import Navigation from './Navigation'
import DataSection from './DataSection'
import ChartSection from './ChartSection'
import Header from '../common/Header'

class ChartsPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container-fluid charts-page">
        <Header />
        <div className="charts-page__body row">
          <div className="charts-page__navigation col-3">
            <Navigation />
          </div>
          <div className="charts-page__data-section col-5">
            <DataSection />
          </div>
          <div className="charts-page__chart-section col-4">
            <ChartSection />
          </div>
        </div>
      </div>
    )
  }
}

export default ChartsPage
