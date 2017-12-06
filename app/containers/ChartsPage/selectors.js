import { createSelector } from 'reselect';

const selectCharts = (state) => state.get('charts');

const makeSelectActiveSection = () => createSelector(
  selectCharts,
  (chartState) => chartState.get('activeSection')
)

const makeSelectBlockchainStats = () => createSelector(
  selectCharts,
  (chartState) => chartState.get('blockchainStats')
)

export {
  selectCharts,
  makeSelectActiveSection,
  makeSelectBlockchainStats,
}
