import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common'
import { CreateBookDto, UpdateBookDto } from 'src/core/dtos'
import { BookQueryParams } from 'src/core/pipes/book.pipes'
import { BookService } from 'src/use-cases/book'

@Controller('api/v1/book')
export class BookController {
  constructor(private readonly bookUseCases: BookService) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookUseCases.createBook(createBookDto)
  }

  @Get()
  findAll(@Query() bookQueryParams: BookQueryParams) {
    const { onlyFirst, userId, select, status } = bookQueryParams

    if (status) {
      return this.bookUseCases.getAllByBookStatus(userId, status, onlyFirst)
    }
    return this.bookUseCases.getAll(userId, select)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookUseCases.getBookById(id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.bookUseCases.updateBook(id, updateBookDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookUseCases.deleteBook(id)
  }
}
