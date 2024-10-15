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
import { Author, Book } from '../entities'

export class CreateBookDto {
  @IsString()
  title: string

  @IsOptional()
  @IsString()
  isbn_10: string

  @IsOptional()
  @IsString()
  isbn_13: string

  @IsInt()
  totalPages: number

  @IsInt()
  pagesRead: number

  @IsOptional()
  @IsDateString()
  publicationDate: Date

  @IsOptional()
  @IsString()
  description: string

  @IsEnum(BookStatusEnum)
  status: BookStatus

  @IsOptional()
  @IsString()
  coverImage: string

  @IsOptional()
  @IsString()
  highlightColor: string

  @IsOptional()
  @IsString()
  language: string

  @IsOptional()
  @IsString()
  publisher?: string

  @IsOptional()
  @IsInt()
  collectionId?: number

  @IsInt()
  @IsOptional()
  publisherId?: number

  @IsInt()
  userId: number

  @IsArray()
  author?: Array<string>

  @IsOptional()
  @IsArray()
  category?: Array<string>
}

export class UpdateBookDto extends PartialType(CreateBookDto) {}
