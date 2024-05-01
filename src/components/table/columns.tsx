interface IColumnTable {
  key: string
  header: string
}

export const columns: IColumnTable[] = [
  {
    key: 'portfolioProductId',
    header: 'ID',
  },
  {
    key: 'productName',
    header: 'Nome do Produto',
  },
  {
    key: 'correctedQuota',
    header: 'Cota Corrigida',
  },
  {
    key: 'value',
    header: 'Valor',
  },
]

export interface ITableData {
  correctedQuota: number
  dailyReferenceDate: number
  movementTypeId: number
  portfolioProductId: number
  productName: string
  value: number
}

export const data: ITableData[] = [
  {
    correctedQuota: 100,
    dailyReferenceDate: 1491782400,
    movementTypeId: 1,
    portfolioProductId: 7268590,
    productName: 'LC XP INVESTIMENTOS CCTVM (CDI + 104% a.a.)',
    value: 24500.6,
  },
  {
    correctedQuota: 100.33,
    dailyReferenceDate: 1491868800,
    movementTypeId: 0,
    portfolioProductId: 7268590,
    productName: 'LC XP INVESTIMENTOS CCTVM (CDI + 104% a.a.)',
    value: 0,
  },
  {
    correctedQuota: 100.66,
    dailyReferenceDate: 1491955200,
    movementTypeId: 0,
    portfolioProductId: 7268590,
    productName: 'LC XP INVESTIMENTOS CCTVM (CDI + 104% a.a.)',
    value: 0,
  },
  {
    correctedQuota: 100.99,
    dailyReferenceDate: 1492041600,
    movementTypeId: 0,
    portfolioProductId: 7268590,
    productName: 'LC XP INVESTIMENTOS CCTVM (CDI + 104% a.a.)',
    value: 0,
  },
  {
    correctedQuota: 101.32,
    dailyReferenceDate: 1492387200,
    movementTypeId: 0,
    portfolioProductId: 7268590,
    productName: 'LC XP INVESTIMENTOS CCTVM (CDI + 104% a.a.)',
    value: 0,
  },
  {
    correctedQuota: 264.26,
    dailyReferenceDate: 1531094400,
    movementTypeId: 0,
    portfolioProductId: 7268590,
    productName: 'LC XP INVESTIMENTOS CCTVM (CDI + 104% a.a.)',
    value: 0,
  },
  {
    correctedQuota: 105.36,
    dailyReferenceDate: 1532995200,
    movementTypeId: 0,
    portfolioProductId: 3217092,
    productName: 'CDB Pré XP INVESTIMENTOS CCTVM (9,5% a.a.)',
    value: 0,
  },
  {
    correctedQuota: 106.05,
    dailyReferenceDate: 1535068800,
    movementTypeId: 0,
    portfolioProductId: 3217092,
    productName: 'CDB Pré XP INVESTIMENTOS CCTVM (9,5% a.a.)',
    value: 0,
  },
  {
    correctedQuota: 117.91,
    dailyReferenceDate: 1594598400,
    movementTypeId: 0,
    portfolioProductId: 2068820,
    productName: 'Tesouro IPCA+ com Juros Semestrais 2024 (NTNB)',
    value: 0,
  },
  {
    correctedQuota: 1348.93,
    dailyReferenceDate: 1598486400,
    movementTypeId: 0,
    portfolioProductId: 7268590,
    productName: 'LC XP INVESTIMENTOS CCTVM (CDI + 104% a.a.)',
    value: 0,
  },
  {
    correctedQuota: 1867.35,
    dailyReferenceDate: 1612742400,
    movementTypeId: 0,
    portfolioProductId: 7268590,
    productName: 'LC XP INVESTIMENTOS CCTVM (CDI + 104% a.a.)',
    value: 0,
  },
]
