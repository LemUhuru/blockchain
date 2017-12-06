/*
 *
 * Charts Page Reducer
 *
 */

import { fromJS } from 'immutable';

import {
  UPDATE_ACTIVE_SECTION,
  UPDATE_BLOCKCHAIN_STATS,
} from './constants';

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

function chartsPageReducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_ACTIVE_SECTION:
      return state
    case UPDATE_BLOCKCHAIN_STATS:
      return state
    default:
      return state;
  }
}

export default chartsPageReducer;
