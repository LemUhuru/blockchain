import { React, Component } from 'react'
import Navigation from './Navigation'
import DataSection from './DataSection'
import ChartSection from './ChartSection'

class ChartsPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="flex-col-1">
            <Navigation />
          </div>
          <div className="flex-col-1">
            <DataSection />
          </div>
          <div className="flex-col-1">
            <ChartSection />
          </div>
        </div>
      </div>
    )
  }
}

export default ChartsMain
