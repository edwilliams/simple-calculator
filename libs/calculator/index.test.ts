import { sum, convertPlusMinus } from '.'

describe('calculator', () => {
  describe('sum', () => {
    test('integers', () => {
      expect(sum('2 + 2')).toEqual('4')
      expect(sum('3 * 3')).toEqual('9')
      expect(sum('9 / 3')).toEqual('3')
      expect(sum('8 - 4')).toEqual('4')
    })
    test('special characters', () => {
      expect(sum('30 ÷ 5')).toEqual('6')
      expect(sum('4 x 4')).toEqual('16')
    })
    test('decimals', () => {
      expect(sum('0.1 + 0.2')).toEqual('0.3')
    })
    test('negatives', () => {
      expect(sum('18 + -2')).toEqual('16')
      expect(sum('-2 + 6')).toEqual('4')
      expect(sum('-12 + -22')).toEqual('-34')
      expect(sum('-3 - -6')).toEqual('3')
    })
    test('multiple operators', () => {
      expect(sum('2 + 2 + 2')).toEqual('6')
      expect(sum('2 x 2 x 2')).toEqual('8')
      expect(sum('90 ÷ 3 ÷ 10')).toEqual('3')
      expect(sum('12 - 2 - 5')).toEqual('5')
    })
    test('excess whitespace', () => {
      expect(sum('   8   -    4  ')).toEqual('4')
    })
    test('value only returns value', () => {
      expect(sum('8')).toEqual('8')
    })
    test('malformed expressions', () => {
      expect(sum('8 x')).toEqual('Malformed expression')
    })
  })

  describe('convertPlusMinus', () => {
    test('integers', () => {
      expect(convertPlusMinus('9')).toEqual('-9')
      expect(convertPlusMinus('-9')).toEqual('9')
    })
    test('decimals', () => {
      expect(convertPlusMinus('0.1')).toEqual('-0.1')
      expect(convertPlusMinus('-0.1')).toEqual('0.1')
    })
  })
})
