export interface IColumnTable {
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
