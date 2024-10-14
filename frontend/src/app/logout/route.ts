import { deleteSession } from "@/actions/user.action"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  const url = new URL(req.url)
  const redirect = url.searchParams.get("redirect") || "/"

  await deleteSession()

  return NextResponse.redirect(new URL(redirect, url))
}
