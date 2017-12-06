/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import ChartsPage from '../../components/ChartsPage/ChartsPage'

class ChartsPageContainer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ChartsPage />
    )
  }
}

const mapStateToProps = state => {
  const { charts } = state
  // const { activeSection = 0, blockchainStats = {} } = charts

  return {
    charts,
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChartsPage)
