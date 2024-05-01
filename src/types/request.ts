export interface IData {
  correctedQuota: number
  dailyReferenceDate: number
  movementTypeId: number
  portfolioProductId: number
  productName: string
  value: number
}

export interface IResponseData {
  success: boolean
  data: {
    snapshotByPortfolio: object
    dailyEquityByPortfolioChartData: IData[]
    snapshotByProduct: []
  }
  error: string | null
}
