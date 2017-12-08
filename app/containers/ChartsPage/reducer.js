import { fromJS } from 'immutable';

import {
  UPDATE_ACTIVE_SECTION,
  UPDATE_CHART_NAME,
  UPDATE_ACTIVE_DATA_CARD,
  UPDATE_BLOCKCHAIN_STATS,
  LOAD_STATS,
  LOAD_STATS_SUCCESS,
  LOAD_STATS_ERROR,
} from './constants';

export const POPULAR_INDEX = 0
export const CURRENCY_INDEX = 1

export const navSections = {
  0: 'popular',
  1: 'currency',
}

const initialState = fromJS({
  activeSection: 0 /* active navigation section */,
  activeDataCard: '0-0',
  chartName: '',
  loading: false,
  error: false,
  blockchainStats: Object.values(navSections).reduce((a, b) => {
    return {
      ...a,
      [b]: {}
    }
  }, {}),
})

export default function chartsPageReducer(state = initialState, action = {} ) {
  switch (action.type) {

    case UPDATE_ACTIVE_SECTION:
      return state
        .set('activeSection', action.index != null ? action.index : 0)

    case UPDATE_BLOCKCHAIN_STATS:
      return state.setIn(['blockchainStats', action.label], action.statsObj)

    case UPDATE_CHART_NAME:
      return state.set('chartName', action.name)

    case UPDATE_ACTIVE_DATA_CARD:
      return state.set('activeDataCard', action.title)

    case LOAD_STATS:
      return state
        .set('loading', true)
        .set('error', false)

    case LOAD_STATS_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        // .setIn(['blockchainStats', action.label], action.statsObj)

    case LOAD_STATS_ERROR:
      return state
        .set('loading', false)
        .set('error', true)

    default:
      return state;
  }
}
