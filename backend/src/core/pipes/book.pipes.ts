import { IsEnum, IsOptional, IsString } from 'class-validator'
import { BookStatus, BookStatusEnum } from '../enums'

export class BookQueryParams {
  @IsString()
  userId: string

  @IsOptional()
  @IsString()
  select: string

  @IsOptional()
  @IsEnum(BookStatusEnum)
  status: BookStatus
}
