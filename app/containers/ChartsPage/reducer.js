import { fromJS } from 'immutable';

import {
  UPDATE_ACTIVE_SECTION,
  UPDATE_BLOCKCHAIN_STATS,
} from './constants';

export const POPULAR_INDEX = 0
export const CURRENCY_INDEX = 1

export const navSections = {
  0: 'Popular',
  1: 'Currency',
}

const initialState = fromJS({
  activeSection: 0 /* active navigation section */,
  blockchainStats: Object.values(navSections).reduce((a,b) => {
    return {
      ...a,
      [b]: {}
    }
  }, {}),
})

export default function chartsPageReducer(state = initialState, action = {} ) {
  switch (action.type) {

    case UPDATE_ACTIVE_SECTION:
      return state.set('activeSection', action.index != null ? action.index : 0)

    case UPDATE_BLOCKCHAIN_STATS:
      return state.setIn(['blockchainStats', action.label], action.statsObj)

    default:
      return state;
  }
}
