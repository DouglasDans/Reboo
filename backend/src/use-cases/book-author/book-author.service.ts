import { Injectable } from '@nestjs/common'
import { BookAuthorRepository } from 'src/core/repositories/book-author.repository'
import { AuthorService } from '../author'
import { Author } from 'src/core/entities'

@Injectable()
export class BookAuthorService {
  constructor(
    private bookAuthor: BookAuthorRepository,
    private authorService: AuthorService,
  ) {}

  createRelation(bookId: number, authors: Array<string>) {
    authors.map(async (authorName) => {
      let author = (await this.verifyIfExistsAuthorByName(authorName)) as Author

      if (!author) {
        author = (await this.authorService.createAuthor({
          name: authorName,
        })) as Author
      }

      await this.bookAuthor.createRelation(bookId, author.id)
    })
  }

  async deleteRelationByBookId(bookId: number) {
    await this.bookAuthor.deleteRelationsByBook(bookId)
  }

  async deleteRelationByAuthorId(authorId: number) {
    await this.bookAuthor.deleteRelationsByAuthor(authorId)
  }

  private verifyIfExistsAuthorByName(name: string) {
    return this.authorService.getAuthorByName(name)
  }
}
