import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { CreateCategoryDto } from './dto/create-category.dto'
import { UpdateCategoryDto } from './dto/update-category.dto'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  create(createCategoryDto: CreateCategoryDto) {
    return this.prisma.category.create({
      data: createCategoryDto,
    })
  }

  findAll() {
    return this.prisma.category.findMany()
  }

  findOne(id: number) {
    return this.prisma.category
      .findFirstOrThrow({
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
    return this.prisma.category
      .findFirstOrThrow({
        where: { name: name },
      })
      .catch(() => {
        return null
      })
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return this.prisma.category
      .update({
        where: { id },
        data: updateCategoryDto,
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
    return this.prisma.category
      .delete({
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
}
