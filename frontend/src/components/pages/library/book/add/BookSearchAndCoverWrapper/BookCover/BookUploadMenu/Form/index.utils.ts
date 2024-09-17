import axios from "axios"
import Vibrant from "node-vibrant"

export async function verifyCoverImageURLIsValid(
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

export async function getHighlightColorFromCoverImage(
  urlImage: string,
): Promise<string> {
  const highlightColor = await Vibrant.from(urlImage).getPalette()
  return highlightColor.DarkVibrant?.hex as string
}
