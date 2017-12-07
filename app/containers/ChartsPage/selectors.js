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

const makeSelectChartName = () => createSelector(
  selectCharts,
  (chartState) => chartState.get('chartName')
)

const makeSelectActiveDataCard = () => createSelector(
  selectCharts,
  (chartState) => chartState.get('activeDataCard')
)

export {
  selectCharts,
  makeSelectActiveSection,
  makeSelectBlockchainStats,
  makeSelectChartName,
  makeSelectActiveDataCard,
}
