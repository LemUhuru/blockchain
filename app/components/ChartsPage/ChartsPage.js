import React, { Component } from 'react'
import Navigation from './Navigation'
import DataSection from './DataSection'
import ChartSection from './ChartSection'
import Header from '../common/Header'
import { getPopularStats } from '../../services/blockchain'

class ChartsPage extends Component {

  componentDidMount() {
    // const popularStats = getPopularStats()
    // this.props.updateBlockchainStats(popularStats)
  }

  render() {
    const { activeSection, updateActiveSection } = this.props

    return (
      <div className="container-fluid charts-page">
        <Header />
        <div className="charts-page__hero">
          <h1 className="title">Blockchain Charts</h1>
          <div className="tagline">The most trusted soure for data on the bitcoin blockchain.</div>
        </div>
        <div className="charts-page__body row">
          <div className="charts-page__navigation col-3">
            <Navigation
              activeSection={activeSection}
              updateActiveSection={updateActiveSection}
            />
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
