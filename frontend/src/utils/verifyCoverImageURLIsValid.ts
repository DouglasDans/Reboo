import axios from "axios"

export default async function verifyCoverImageURLIsValid(
  coverImage: string,
): Promise<string | null> {
  try {
    const url = new URL(coverImage)
    await axios.get(url.href)
    return url.href
  } catch (err) {
    console.log(err)
    return null
  }
}
