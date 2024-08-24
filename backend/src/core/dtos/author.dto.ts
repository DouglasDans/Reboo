import { PartialType } from '@nestjs/mapped-types'
import { IsString } from 'class-validator'

export class CreateAuthorDto {
  @IsString()
  name: string
}

export class UpdateAuthorDto extends PartialType(CreateAuthorDto) {}
