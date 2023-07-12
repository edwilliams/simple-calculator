import React, { useState } from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'

import Main from './main'

describe('RangeCounterFunctional', () => {
  afterEach(cleanup)

  it('shows the equation when passed in', () => {
    const { getByTestId } = render(
      <Main equation="2 x 2" onClickButton={() => {}} />
    )
    expect(getByTestId('sum-display').innerHTML).toEqual('2 x 2')
  })

  it('shows a number after it has been clicked', async () => {
    const Wrapper = () => {
      const [equation, setEquation] = useState('0')
      return <Main equation={equation} onClickButton={setEquation} />
    }

    const { getByTestId, getByText } = render(<Wrapper />)

    const btn7 = getByText('7')
    fireEvent.click(btn7)

    expect(getByTestId('sum-display').innerHTML).toEqual('7')
  })
})
