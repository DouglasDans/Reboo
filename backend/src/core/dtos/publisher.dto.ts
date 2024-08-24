import { PartialType } from '@nestjs/mapped-types'
import { IsString } from 'class-validator'

export class CreatePublisherDto {
  @IsString()
  name: string
}

export class UpdatePublisherDto extends PartialType(CreatePublisherDto) {}
