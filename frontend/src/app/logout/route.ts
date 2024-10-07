import { logout } from "@/actions/user.action"

export async function GET() {
  await logout()
}
