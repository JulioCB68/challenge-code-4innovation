import axios from 'axios'

import { IData } from '@/types/request'

export async function getData(): Promise<IData[]> {
  const response = await axios.get(
    'https://6270328d6a36d4d62c16327c.mockapi.io/getFixedIncomeClassData',
  )
  return response.data.data.dailyEquityByPortfolioChartData
}
