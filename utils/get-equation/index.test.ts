import { newEquation } from '.'

describe('get-equation', () => {
  describe('newEquation', () => {
    test('delete equation', () => {
      expect(newEquation({ equation: '9x', val: '⌫' })).toEqual('0')
    })
    test('return value', () => {
      expect(newEquation({ equation: '0', val: '9' })).toEqual('9')
      expect(
        newEquation({ equation: 'Malformed expression', val: '9' })
      ).toEqual('9')
    })
    test('plus / minus', () => {
      expect(newEquation({ equation: '9', val: '-/+' })).toEqual('-9')
      expect(newEquation({ equation: '-9', val: '-/+' })).toEqual('9')
    })
    test('equals', () => {
      expect(newEquation({ equation: '9x9', val: '=' })).toEqual('81')
    })
    test('complete equation', () => {
      expect(newEquation({ equation: '9x', val: '9' })).toEqual('9x9')
    })
  })
})
