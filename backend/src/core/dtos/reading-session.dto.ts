import { PartialType } from '@nestjs/mapped-types'
import { IsDateString, IsInt } from 'class-validator'

export class CreateReadingSessionDto {
  @IsDateString()
  startDate: Date

  @IsDateString()
  endDate: Date

  @IsInt()
  pagesRead: number

  @IsInt()
  bookId: number

  @IsInt()
  userId: number
}

export class UpdateReadingSessionDto extends PartialType(
  CreateReadingSessionDto,
) {}
