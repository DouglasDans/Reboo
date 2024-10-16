import Vibrant from "node-vibrant"

export function isValidImageUrl(url: string): Promise<boolean> {
  return new Promise(resolve => {
    const img = new Image()
    img.onload = () => resolve(true)
    img.onerror = () => resolve(false)
    img.src = url
  })
}

export async function getHighlightColorFromCoverImage(
  urlImage: string,
): Promise<string> {
  const highlightColor = await Vibrant.from(urlImage).getPalette()
  return highlightColor.DarkVibrant?.hex as string
}
