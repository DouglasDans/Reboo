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
import { BookStatusEnum } from 'src/core/enums'
import { BookQueryParams } from 'src/core/pipes/book.pipes'
import { BookService } from 'src/use-cases/book'

@Controller('api/v1/book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.createBook(createBookDto)
  }

  @Get()
  findAll(@Query() bookQueryParams: BookQueryParams) {
    const { onlyFirst, userId, select, status } = bookQueryParams

    if (status) {
      return this.bookService.getAllByBookStatus(userId, status, onlyFirst)
    }
    return this.bookService.getAll(userId, select)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookService.getBookById(id)
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBookDto?: UpdateBookDto,
    @Query('highlightColor') highlightColor?: string,
    @Query('bookStatus') bookStatus?: BookStatusEnum,
  ) {
    if (highlightColor) {
      return this.bookService.updateHighlightColor(parseInt(id), highlightColor)
    }

    if (bookStatus) {
      return this.bookService.updateBookStatus(parseInt(id), bookStatus)
    }

    return this.bookService.updateBook(parseInt(id), updateBookDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookService.deleteBook(parseInt(id))
  }
}
