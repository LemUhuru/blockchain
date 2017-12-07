import { takeLatest, put, select } from 'redux-saga/effects';
import { UPDATE_ACTIVE_SECTION } from 'containers/ChartsPage/constants'
import { updateActiveDataCard, updateChartName } from 'containers/ChartsPage/actions'
import { makeSelectActiveSection, makeSelectBlockchainStats } from 'containers/ChartsPage/selectors'
import { blockchainStats, chartMap } from 'tests/Data/ChartsPage'
import { getChartImageURL, getChartURL } from 'helpers/charts'
import { navSections } from 'containers/ChartsPage/reducer'

export function* setDefaultDataCard() {
  const activeSection = yield select(makeSelectActiveSection())
  const activeDataCard = `${activeSection}-0`

  yield put(updateActiveDataCard(activeDataCard))
}

export function* setDefaultChart() {
  // const blockchainStats = yield select(makeSelectBlockchainStats())
  const activeSection = yield select(makeSelectActiveSection())
  const activeStats = blockchainStats[navSections[activeSection]]
  const chartName = Object.keys(activeStats)[0]
  const formattedChartName = chartMap[chartName]

  yield put(updateChartName(formattedChartName))
}

export default function* defaultStates() {
  yield [
    takeLatest(UPDATE_ACTIVE_SECTION, setDefaultDataCard),
    takeLatest(UPDATE_ACTIVE_SECTION, setDefaultChart),
  ]
}

// /**
//  * Github repos request/response handler
//  */
// export function* getRepos() {
//
//   // Select username from store
//   const username = yield select(makeSelectUsername());
//   const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;
//
//   try {
//     // Call our request helper (see 'utils/request')
//     const repos = yield call(request, requestURL);
//     yield put(reposLoaded(repos, username));
//   } catch (err) {
//     yield put(repoLoadingError(err));
//   }
// }
