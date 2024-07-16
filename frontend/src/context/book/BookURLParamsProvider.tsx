"use client"

import { createContext, ReactNode } from "react"

interface Props {
  value: string
  children: ReactNode
}

export const BookURLParamsContext = createContext({})

export function BookURLParamsProvider({ value, children }: Props) {
  return (
    <BookURLParamsContext.Provider value={value}>
      {children}
    </BookURLParamsContext.Provider>
  )
}
