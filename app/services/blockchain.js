import { request, getFormattedURI } from '../helpers/api'
import { CHARTS_BASE_URL, CHARTS_API_BASE_URL, STATS_API_BASE_URL,
  AVG_BLOCK_SIZE_CHART } from './constants'

export function getChartData(params = {}) {
  const CHART_URL = getFormattedURI(CHARTS_API_BASE_URL, params)
  return request(CHART_URL)
    .then(response => { return response })
    .catch(response => {
      return Promise.reject(`Error: ${response.error}`)
    })
}

export function getChartLink(chartName) {
  const CHART_URL = `${CHARTS_BASE_URL}/${chartName}`
  return CHART_URL
}


export function getBlockChainStats(params = {}) {
  const STATS_URL = getFormattedURI(STATS_API_BASE_URL, params)
  return request(STATS_URL)
    .then(response => { return response })
    .catch(response => {
      return Promise.reject(`Error: ${response.error}`)
    })
}


export function getMarketPrice(params = {}) {
  const marketPrice = getBlockChainStats().market_price_usd
  return marketPrice
}

export function getAvgBlockSizeChart(params = {}) {
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

export function getPopularStats(params = {}) {
  let popularStats = {
    marketPrice: getMarketPrice(),
    averageBlockSize: null,
    txPerDay: null,
    mempoolSize: null,
  }

  return popularStats
}

export function getCurrencyStats(params = {}) {
  return null
}
