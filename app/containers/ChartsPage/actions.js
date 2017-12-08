import {
  UPDATE_ACTIVE_SECTION,
  UPDATE_BLOCKCHAIN_STATS,
  UPDATE_CHART_NAME,
  UPDATE_ACTIVE_DATA_CARD,
  LOAD_STATS,
  LOAD_STATS_SUCCESS,
  LOAD_STATS_ERROR,
} from './constants';

export function updateActiveSection(index) {
  return { type: UPDATE_ACTIVE_SECTION, index }
}

export function updateBlockchainStats(label, statsObj) {
  return { type: UPDATE_BLOCKCHAIN_STATS, statsObj }
}

export function updateChartName(name) {
  return { type: UPDATE_CHART_NAME, name }
}

export function updateActiveDataCard(title) {
  return { type: UPDATE_ACTIVE_DATA_CARD, title }
}

export function loadStats() {
  return { type: LOAD_STATS }
}

export function loadStatsSuccess() {
  return { type: LOAD_STATS_SUCCESS }
}

export function loadStatsError() {
  return { type: LOAD_STATS_ERROR }
}
