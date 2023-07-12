import { evaluate } from 'mathjs'

/**
 * Process arithmetic in string format (using mathjs)
 */
export const sum = (_str: string): string => {
  // replace special characters
  const str = _str.replaceAll('÷', '/').replaceAll('x', '*')
  try {
    const val = evaluate(str)
    // NB floating-point machines cannot accurately represent numbers like 0.1, 0.2 or 0.3
    return Number(val.toPrecision(12)).toString()
  } catch (error) {
    return 'Malformed expression'
  }
}

/**
 * Convert positive to negative and vice versa
 */
export const convertPlusMinus = (num: string): string => {
  const _val = parseFloat(num)
  const val = Math.sign(_val) === 1 ? -_val : Math.abs(_val)
  return `${val}`
}
