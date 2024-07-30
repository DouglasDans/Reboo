import {
  IsEmail,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator'

export class CreateUserDto {
  @IsString()
  name: string

  @IsEmail()
  email: string

  @IsString()
  password: string

  @IsString()
  @IsOptional()
  bio: string

  @IsString()
  @IsOptional()
  profileImage: string

  @IsString()
  @IsOptional()
  google_id: string
}
