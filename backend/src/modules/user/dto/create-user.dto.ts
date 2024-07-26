import { IsEmail, IsString, IsStrongPassword } from 'class-validator'

export class CreateUserDto {
  @IsString()
  name: string

  @IsEmail()
  email: string

  @IsStrongPassword()
  password: string

  @IsString()
  bio: string

  @IsString()
  profileImage: string

  @IsString()
  google_id: string
}
