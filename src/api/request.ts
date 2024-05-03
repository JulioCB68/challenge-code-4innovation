import axios from 'axios'

import { IData } from '@/types/request'

export async function getData(): Promise<IData[]> {
  return new Promise<IData[]>((resolve, reject) => {
    setTimeout(async () => {
      try {
        const response = await axios.get(
          'https://6270328d6a36d4d62c16327c.mockapi.io/getFixedIncomeClassData',
        )
        resolve(response.data.data.dailyEquityByPortfolioChartData)
      } catch (error) {
        reject(error)
      }
    }, 1000)
  })
}
