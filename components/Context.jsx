'use client'

import { Provider as JotaiProvider } from 'jotai'
import { atom } from 'jotai'

export const userAtom = atom("hello world")

function Context({ children }) {
  return (
    <JotaiProvider>{children}</JotaiProvider>
  )
}

export default Context