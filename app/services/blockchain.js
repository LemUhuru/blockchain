import { request, getFormattedURI } from 'helpers/api'
import { CHARTS_BASE_URL, CHARTS_API_BASE_URL, STATS_API_BASE_URL,
  AVG_BLOCK_SIZE_CHART, MARKET_PRICE, MARKET_CAP, MEMPOOL_SIZE,
  USD_TRADE_VOLUME, TOTAL_BITCOINS, TX_PER_DAY
} from './constants'

export function getChartData(chartName, params = {}) {
  const newParams = params
  newParams.chartName = chartName
  const CHART_URL = getFormattedURI(CHARTS_API_BASE_URL, newParams)

  request(CHART_URL)
    .then(response => { return response })
    .catch(response => { return `Error: ${response.error}` })
}

export function getBlockChainStats() {
  const STATS_URL = getFormattedURI(STATS_API_BASE_URL)

  request(STATS_URL, { mode: 'no-cors' })
    .then(response => { return response })
    .catch(response => { return `Error: ${response.error}` })
}

export function getMarketPrice(params = {}) {
  return getBlockChainStats().market_price_usd
}

export function getAvgBlockSizeChart(params = {}) {
  getChartData(AVG_BLOCK_SIZE_CHART, params)
  .then((data) => { return data.values.pop().y.toFixed(2) })
  .catch(response => { return response.error })
}

export function getTXPerDay(params = {}) {
  getChartData(TX_PER_DAY, params)
    .then(data => { return data.values.pop().y })
    .catch(response => { return response.error })
}

export function getMemPoolSize(params = {}) {
  getChartData(MEMPOOL_SIZE, params)
  .then(data => { return data.values.pop().y })
  .catch(response => { return response.error })
}

export function getTotalBitcoins(params = {}) {
  getChartData(TOTAL_BITCOINS, params)
  .then(data => { return data.values.pop().y })
  .catch(response => { return response.error })
}

export function getMarketCap(params = {}) {
  getChartData(MARKET_CAP, params)
  .then(data => { return data.values.pop().y })
  .catch(response => { return response.error })
}

export function getUSDTradeVol(params = {}) {
  getChartData(USD_TRADE_VOLUME, params)
  .then(data => { return data.values.pop().y })
  .catch(response => { return response.error })
}

// export function getPopularStats() {
//   Promise.all([
//     getMarketPrice(),
//     getAvgBlockSize(),
//     getTXPerDay(),
//     getMemPoolSize(),
//   ])
//   .then(stats => {
//     stats.map(stat => {
//       return {}
//     })
//   })
//   const popularStats = {
//     "Market Price": getMarketPrice(),
//     "Average Block Size": getAvgBlockSize(),
//     "Transactions per Day": getTXPerDay(),
//     "Mempool Size": getMemPoolSize(),
//   }
//
//   return popularStats
// }
//
// export function getCurrencyStats() {
//   const currencyState = {
//
//   }
//   return null
// }
