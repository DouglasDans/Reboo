import { jwtVerify } from "jose"

type payload = {
  userId: number
  userName: string
  iat: number
  exp: number
}

const jwtConfig = {
  secret: new TextEncoder().encode(process.env.JWT_SECRET),
}

export async function jwtDecode(token: string): Promise<payload | null> {
  try {
    const decoded = await jwtVerify(token, jwtConfig.secret)
    return decoded.payload as payload
  } catch (error) {
    return null
  }
}
