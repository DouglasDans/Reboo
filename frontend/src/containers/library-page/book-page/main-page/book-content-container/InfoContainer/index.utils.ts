import { Author, Category } from "@/services/rebooAPI/api.types"

type AuthorArr = {
  author: Author
}

type CategoryArr = {
  category: Category
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

export function convertCategoriesArrayToString(
  categories: Array<CategoryArr>,
): string {
  let strCategories: string = ""
  const nameCategoriesArr: Array<string> = []

  categories.map(item => {
    nameCategoriesArr.push(item.category.name)
  })
  strCategories = nameCategoriesArr.join(", ")
  return strCategories
}

export function convertStringToDate(strDate: string): string {
  const date = new Date(strDate)
  return `${date.getUTCDate()}/${date.getUTCMonth() + 1}/${date.getUTCFullYear()}`
}
