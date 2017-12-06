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
import { createStructuredSelector } from 'reselect';
import { makeSelectActiveSection, makeSelectBlockchainStats } from './selectors'
import { updateActiveSection, updateBlockchainStats } from './actions'

class ChartsPageContainer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ChartsPage />
    )
  }
}

const mapStateToProps = createStructuredSelector({
  activeSection: makeSelectActiveSection(),
  blockchainStats: makeSelectBlockchainStats(),
})

const mapDispatchToProps = dispatch => {
  return {
    updateActiveSection: (index) => dispatch(updateActiveSection(index)),
    updateBlockchainStats: (label, statsObj) => dispatch(updateBlockchainStats(label, statsObj))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChartsPage)
