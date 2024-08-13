import {
  IsInt,
  IsString,
  IsEnum,
  IsArray,
  IsOptional,
  IsDateString,
} from 'class-validator'
import { BookStatus, BookStatusEnum } from '../enums'
import { PartialType } from '@nestjs/mapped-types'

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

  @IsEnum(BookStatusEnum)
  status: BookStatus

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
  @IsOptional()
  collectionId?: number

  @IsInt()
  userId: number

  @IsArray()
  author: Array<string>

  @IsArray()
  category: Array<string>
}

export class UpdateBookDto extends PartialType(CreateBookDto) {}
