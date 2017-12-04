import fetch from 'isomorphic-fetch'
import { checkStatus, getFormattedURI } from '../helpers/api'
import { CHARTS_API_BASE_URL, STATS_API_BASE_URL }

const AVG_BLOCK_SIZE_CHART = 'avg-block-size'

export function getChartData(params) {
  const CHART_URL = getFormattedURI(CHARTS_API_BASE_URL, params)
  return fetch(CHART_URL)
    .then(checkStatus)
    .then(response => { return response })
    .catch(response => {
      return Promise.reject(`Error: ${response.error}`)
    })
}

export function getBlockChainStats(params) {
  const STATS_URL = getFormattedURI(STATS_API_BASE_URL, params)
  return fetch(STATS_URL)
    .then(checkStatus)
    .then(response => { return response })
    .catch(response => {
      return Promise.reject(`Error: ${response.error}`)
    })
}

export function getPopularStats(params) {
  return null
}

export function getCurrencyStats(params) {
  return null
}

export function getMarketPrice(params) {
  const marketPrice = getBlockChainStats().market_price_usd
  return marketPrice
}

export function getAvgBlockSizeChart(params) {
  const { chartName } = params
  return getChartData({ chartName: AVG_BLOCK_SIZE_CHART })
    .then(data => {
      const { values } = data
      const currentAvg = values.pop().y.toFixed(2)
      return currentAvg
    }).catch(response => {response.error})
}

export function getTXPerDayChart() {
}

export function getMemPoolSizeChart() {
}

export function getTotalBitcoins() {
}

export function getMarketCap() {
}

export function getUSDTradeVol() {
}
