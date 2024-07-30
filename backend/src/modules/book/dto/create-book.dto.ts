import {
  IsInt,
  IsString,
  IsEnum,
  IsUrl,
  IsArray,
  IsOptional,
  IsDateString,
} from 'class-validator'
import { bookStatus } from '../../../enums/book-status.enum'
import { CreateAuthorDto } from 'src/modules/author/dto/create-author.dto'
import { CreateCategoryDto } from 'src/modules/category/dto/create-category.dto'

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

  @IsDateString()
  publicationDate: Date

  @IsString()
  description: string

  @IsEnum(bookStatus)
  status: bookStatus

  @IsString()
  @IsOptional()
  coverImage: string

  @IsString()
  @IsOptional()
  backgroundColors: string

  @IsString()
  language: string

  @IsString()
  publisher: string

  @IsInt()
  userId: number

  @IsArray()
  author: Array<string>

  @IsArray()
  category: Array<string>
}
