import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { CreateAuthorDto } from './dto/create-author.dto'
import { UpdateAuthorDto } from './dto/update-author.dto'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class AuthorService {
  constructor(private prisma: PrismaService) {}

  create(createAuthorDto: CreateAuthorDto) {
    return this.prisma.author.create({
      data: createAuthorDto,
    })
  }

  async findAll() {
    return await this.prisma.author.findMany()
  }

  findOne(id: number) {
    return this.prisma.author
      .findUniqueOrThrow({
        where: { id },
      })
      .catch((e) => {
        throw new HttpException(
          {
            message: 'Dados não foram encontrados no banco - ' + e,
            statusCode: HttpStatus.NOT_FOUND,
          },
          HttpStatus.NOT_FOUND,
        )
      })
  }

  findByName(name: string) {
    return this.prisma.author
      .findFirstOrThrow({
        where: { name: name },
      })
      .catch(() => {
        return null
      })
  }

  update(id: number, updateAuthorDto: UpdateAuthorDto) {
    return this.prisma.author
      .update({
        where: { id },
        data: updateAuthorDto,
      })
      .catch((e) => {
        throw new HttpException(
          {
            message: 'Dados não foram encontrados no banco - ' + e.meta.cause,
            statusCode: HttpStatus.NOT_FOUND,
          },
          HttpStatus.NOT_FOUND,
        )
      })
  }

  remove(id: number) {
    return this.prisma.author
      .delete({
        where: { id },
      })
      .catch((e) => {
        throw new HttpException(
          {
            message: 'Dados não foram encontrados no banco - ' + e.meta.cause,
            statusCode: HttpStatus.NOT_FOUND,
          },
          HttpStatus.NOT_FOUND,
        )
      })
  }
}
