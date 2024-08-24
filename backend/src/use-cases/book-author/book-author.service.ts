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

  deleteRelationByBookId(bookId: number) {
    this.bookAuthor.deleteRelationsByBook(bookId)
  }

  deleteRelationByAuthorId(authorId: number) {
    this.bookAuthor.deleteRelationsByAuthor(authorId)
  }

  private verifyIfExistsAuthorByName(name: string) {
    return this.authorService.getAuthorByName(name)
  }
}
