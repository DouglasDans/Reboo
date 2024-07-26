import { IsInt, IsString } from 'class-validator'

export class CreateCollectionDto {
  @IsString()
  name: string

  @IsString()
  backgroundColors: string

  @IsInt()
  userId: number
}
