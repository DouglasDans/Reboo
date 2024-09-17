import { Author, Category } from "@/services/rebooAPI/api.types"

type AuthorArr = {
  author: Author
}

type CategoryArr = {
  author: Category
}

export function convertAuthorsArrayToString(authors: Array<AuthorArr>): string {
  let strAuthors: string = ""
  const nameAuthorsArr: Array<string> = []

  authors.map(item => {
    nameAuthorsArr.push(item.author.name)
  })
  strAuthors = nameAuthorsArr.join(", ")
  return strAuthors
}

export function convertStringToDate(strDate: string): string {
  const date = new Date(strDate)
  return `${date.getUTCDate()}/${date.getUTCMonth() + 1}/${date.getUTCFullYear()}`
}
