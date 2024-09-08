"use client"

import { createContext, ReactNode } from "react"

interface Props {
  value: number
  children: ReactNode
}

export const UserIdContext = createContext({})

export function UserIdProvider({ value, children }: Props) {
  return (
    <UserIdContext.Provider value={value}>
      {children}
    </UserIdContext.Provider>
  )
}
