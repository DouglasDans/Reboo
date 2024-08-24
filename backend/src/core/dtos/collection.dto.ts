import { PartialType } from '@nestjs/mapped-types'
import { IsInt, IsString } from 'class-validator'

export class CreateCollectionDto {
  @IsString()
  name: string

  @IsString()
  backgroundColors: string

  @IsInt()
  userId: number
}

export class UpdateCollectionDto extends PartialType(CreateCollectionDto) {}
