import { GoogleAPIResponseISBN } from '@/types/googleBooksApi'

export default function toStringISBN(arrISBN: Array<GoogleAPIResponseISBN>) {
  let rawArr: Array<string> = []
  arrISBN.map((item) => {
    rawArr.push(item.identifier)
  })
  return rawArr.join(', ')
}
