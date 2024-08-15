import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { CreateAuthorDto, UpdateAuthorDto } from 'src/core/dtos'
import { AuthorUseCases } from 'src/use-cases/author'

@Controller('api/v1/author')
export class AuthorController {
  constructor(private readonly authorUseCases: AuthorUseCases) {}

  @Post()
  create(@Body() createAuthorDto: CreateAuthorDto) {
    return this.authorUseCases.createAuthor(createAuthorDto)
  }

  @Get()
  findAll() {
    return this.authorUseCases.getAllAuthors()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authorUseCases.getAuthorById(id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthorDto: UpdateAuthorDto) {
    return this.authorUseCases.updateAuthor(id, updateAuthorDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authorUseCases.deleteAuthor(id)
  }
}
