export const formatCurrency = (value: number, currency?: string) => Intl.NumberFormat('pt-BR', {
  style: 'currency', currency: currency ?? 'USD'
}).format(value)