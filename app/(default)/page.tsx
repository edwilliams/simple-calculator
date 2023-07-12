'use client'

import { useState } from 'react'
import { newEquation } from '@/utils/get-equation'
import Main from '@/components/main'

export default function Page() {
  const [equation, setEquation] = useState<string>('0')

  const clickButton = (val: string) => {
    setEquation(newEquation({ equation, val }))
  }

  return <Main equation={equation} onClickButton={clickButton} />
}
