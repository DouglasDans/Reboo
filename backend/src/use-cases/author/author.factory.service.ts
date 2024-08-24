import { Injectable } from '@nestjs/common'
import { CreateAuthorDto, UpdateAuthorDto } from 'src/core/dtos'
import { Author } from 'src/core/entities'

@Injectable()
export class AuthorFactoryService {
  createNewAuthor(createAuthorDto: CreateAuthorDto) {
    const author = new Author()
    author.name = createAuthorDto.name

    return author
  }
  updateNewAuthor(updateAuthorDto: UpdateAuthorDto) {
    const author = new Author()
    author.name = updateAuthorDto.name

    return author
  }
}
