export function formatCurrency(value: number): string {
  const formatter = new Intl.NumberFormat(navigator.language, {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 2,
  }).format(value)

  return formatter
}
