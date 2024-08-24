import { Injectable } from '@nestjs/common'
import { AuthorRepository } from 'src/core/repositories/author.repository'
import { AuthorFactoryService } from './author.factory.service'
import { Author } from 'src/core/entities'
import { CreateAuthorDto, UpdateAuthorDto } from 'src/core/dtos'

@Injectable()
export class AuthorService {
  constructor(
    private author: AuthorRepository,
    private authorFactory: AuthorFactoryService,
  ) {}

  getAllAuthors(): Promise<Author[]> {
    return this.author.findAll()
  }

  getAuthorById(id: string): Promise<Author> {
    return this.author.findById(parseInt(id))
  }

  getAuthorByName(name: string): Promise<Author> {
    return this.author.findByName(name)
  }

  createAuthor(createAuthorDto: CreateAuthorDto): Promise<Author> {
    const author = this.authorFactory.createNewAuthor(createAuthorDto)
    return this.author.create(author)
  }

  updateAuthor(
    authorId: string,
    updateAuthorDto: UpdateAuthorDto,
  ): Promise<Author> {
    const author = this.authorFactory.updateNewAuthor(updateAuthorDto)
    return this.author.update(parseInt(authorId), author)
  }

  deleteAuthor(authorId: string): Promise<Author> {
    return this.author.delete(parseInt(authorId))
  }
}
