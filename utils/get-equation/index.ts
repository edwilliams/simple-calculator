import { sum, convertPlusMinus } from '@/libs/calculator'

/**
 * Process existing equation and new value into new equation
 */
export const newEquation = ({
  equation,
  val,
}: {
  equation: string
  val: string
}): string =>
  val === '⌫'
    ? '0'
    : equation === '0' || equation === 'Malformed expression'
    ? val
    : val === '-/+'
    ? convertPlusMinus(equation)
    : val === '='
    ? sum(equation)
    : `${equation}${val}`
