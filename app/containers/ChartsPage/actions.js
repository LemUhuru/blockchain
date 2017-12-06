import {
  UPDATE_ACTIVE_SECTION,
  UPDATE_BLOCKCHAIN_STATS,
} from './constants';

export function updateActiveSection(index) {
  return { type: UPDATE_ACTIVE_SECTION, index }
}

export function updateBlockchainStats(statsObj) {
  return { type: UPDATE_BLOCKCHAIN_STATS, statsObj}
}
