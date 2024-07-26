import {
  IsInt,
  IsString,
  IsDate,
  IsEnum,
  IsUrl,
  IsObject,
  IsArray,
} from 'class-validator'
import { Type } from 'class-transformer'
import { bookStatus } from '../../enums/book-status.enum'
import { CreateAuthorDto } from 'src/author/dto/create-author.dto'
import { CreatePublisherDto } from 'src/publisher/dto/create-publisher.dto'
import { CreateCategoryDto } from 'src/category/dto/create-category.dto'

export class CreateBookDto {
  @IsString()
  title: string

  @IsString()
  isbn_10: string

  @IsString()
  isbn_13: string

  @IsInt()
  totalPages: number

  @IsInt()
  pagesRead: number

  @IsDate()
  publicationDate: Date

  @IsString()
  description: string

  @IsEnum(bookStatus)
  status: bookStatus

  @IsUrl()
  coverImage: string

  @IsString()
  backgroundColors: string

  @IsString()
  language: string

  @IsArray()
  author: Array<CreateAuthorDto>

  publisher: CreatePublisherDto

  category: CreateCategoryDto
}
