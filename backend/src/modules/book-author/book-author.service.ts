import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../prisma.service'
import { AuthorService } from '../author/author.service'

@Injectable()
export class BookAuthorService {
  constructor(
    private prisma: PrismaService,
    private authorService: AuthorService,
  ) {}

  async getIfExistsAuthorByName(name: string) {
    return this.authorService.findByName(name)
  }

  async createRelation(bookId: number, authorName: string) {
    let author = await this.getIfExistsAuthorByName(authorName)

    if (!author) {
      author = await this.authorService.create({
        name: authorName,
      })
    }

    await this.prisma.bookAuthor.create({
      data: {
        authorId: author.id,
        bookId: bookId,
      },
    })
  }
}
