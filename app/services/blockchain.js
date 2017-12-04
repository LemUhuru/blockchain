import fetch from 'isomorphic-fetch'
import { checkStatus, getFormattedURI } from '../helpers/api'

const CHARTS_API_BASE_URL = "https://api.blockchain.info/charts/"
const STATS_API_BASE_URL = "https://api.blockchain.info/stats/"

export function getChartData(params) {
  const CHART_URL = getFormattedURI(CHARTS_API_BASE_URL, params)
  return fetch(CHART_URL)
    .then(checkStatus)
    .then(response => { return response })
    .catch(response => {
      return Promise.reject(`Error: ${response.error}`);
    })
}

export function getBlockChainStats() {
  const STATS_URL = getFormattedURI(CHARTS_API_BASE_URL, params)
  return fetch(STATS_URL)
    .then(checkStatus)
    .then(response => { return response })
    .catch(response => {
      return Promise.reject(`Error: ${response.error}`);
    })
}
