import { IsBoolean, IsEnum, IsOptional, IsString } from 'class-validator'
import { BookStatus, BookStatusEnum } from '../enums'
import { Transform } from 'class-transformer'

export class BookQueryParams {
  @IsString()
  userId: string

  @IsOptional()
  @IsString()
  select: string

  @IsOptional()
  @IsEnum(BookStatusEnum)
  status: BookStatus

  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => value === 'true')
  onlyFirst: boolean
}
