import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common'
import { CreateUserDto, UpdateUserDto } from 'src/core/dtos'
import { UserUseCases } from 'src/use-cases/user'

@Controller('api/v1/user')
export class UserController {
  constructor(private readonly userUseCases: UserUseCases) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userUseCases.createUser(createUserDto)
  }

  @Get()
  findAll() {
    return this.userUseCases.getAllUsers()
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userUseCases.getUserById(id)
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userUseCases.updateUser(id, updateUserDto)
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.userUseCases.deleteUser(id)
  }
}
