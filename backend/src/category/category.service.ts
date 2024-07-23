import { Injectable } from '@nestjs/common'
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
      .findUniqueOrThrow({
        where: { id },
      })
      .catch((e) => {
        throw new Error(`Dados não foram encontrados no banco - ${e}`)
      })
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return this.prisma.category
      .update({
        where: { id },
        data: updateCategoryDto,
      })
      .catch((e) => {
        throw new Error(
          `Dados não foram encontrados no banco - ${e.meta.cause}`,
        )
      })
  }

  remove(id: number) {
    return this.prisma.category
      .delete({
        where: { id },
      })
      .catch((e) => {
        throw new Error(
          `Dados não foram encontrados no banco - ${e.meta.cause}`,
        )
      })
  }
}
