export const numeroALetras = (num: number): string => {
  if (num < 1 || num > 1000) return 'Ingresa un número entre 1 y 1000'

  const unidades = [
    '',
    'uno',
    'dos',
    'tres',
    'cuatro',
    'cinco',
    'seis',
    'siete',
    'ocho',
    'nueve'
  ]

  const especiales = [
    'diez',
    'once',
    'doce',
    'trece',
    'catorce',
    'quince',
    'dieciséis',
    'diecisiete',
    'dieciocho',
    'diecinueve'
  ]

  const decenas = [
    '',
    '',
    'veinte',
    'treinta',
    'cuarenta',
    'cincuenta',
    'sesenta',
    'setenta',
    'ochenta',
    'noventa'
  ]

  const centenas = [
    '',
    'ciento',
    'doscientos',
    'trescientos',
    'cuatrocientos',
    'quinientos',
    'seiscientos',
    'setecientos',
    'ochocientos',
    'novecientos'
  ]

  if (num === 100) return 'cien'
  if (num === 1000) return 'mil'

  const c = Math.floor(num / 100)
  const d = Math.floor((num % 100) / 10)
  const u = num % 10

  let resultado = ''

  if (c > 0) {
    resultado += centenas[c] + ' '
  }

  const resto = num % 100

  if (resto >= 10 && resto < 20) {
    resultado += especiales[resto - 10]
  } else if (resto >= 20 && resto < 30) {
    resultado += resto === 20 ? 'veinte' : 'veinti' + unidades[u]
  } else {
    if (d > 0) {
      resultado += decenas[d]
      if (u > 0) resultado += ' y '
    }
    if (u > 0 || num < 10) {
      resultado += unidades[u]
    }
  }

  return resultado.trim()
}
