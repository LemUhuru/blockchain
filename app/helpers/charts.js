import { chartMap } from 'tests/Data/ChartsPage'
import { CHARTS_API_BASE_URL } from 'services/constants'

export function getChartAPIName(chartLabel) {
  if (typeof chartLabel === 'string' && chartLabel != null) {
    return chartMap[chartLabel]
  }

  throw new UserException('Invalid label')
}

export function getChartImageURL(chartName) {
  const CHART_IMG = `${CHARTS_API_BASE_URL}/thumbnail/${chartName}`
  return CHART_IMG
}
