export function convertStringDateToDate(strDate: string) {
  const date = new Date(strDate)
  return date
}

export function isValidImageUrl(url: string): Promise<boolean> {
  return new Promise(resolve => {
    const img = new Image()
    img.onload = () => resolve(true)
    img.onerror = () => resolve(false)
    img.src = url
  })
}

export function isValidHex(hex: string): boolean {
  const hexRegex = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
  return hexRegex.test(hex)
}
