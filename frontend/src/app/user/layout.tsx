import ContainerWithSideMenu from "@/components/containers/ContainerWithSideMenu"
import React, { PropsWithChildren } from "react"

export default function layout({ children }: PropsWithChildren) {
  return <ContainerWithSideMenu>{children}</ContainerWithSideMenu>
}
