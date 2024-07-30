import { IsString } from 'class-validator'

export class CreatePublisherDto {
  @IsString()
  name: string
}
