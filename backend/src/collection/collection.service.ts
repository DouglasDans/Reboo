import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { CreateCollectionDto } from './dto/create-collection.dto'
import { UpdateCollectionDto } from './dto/update-collection.dto'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class CollectionService {
  constructor(private prisma: PrismaService) {}

  create(createCollectionDto: CreateCollectionDto) {
    return this.prisma.collection.create({
      data: createCollectionDto,
    })
  }

  findAll() {
    return this.prisma.collection.findMany()
  }

  findOne(id: number) {
    return this.prisma.collection
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

  update(id: number, updateCollectionDto: UpdateCollectionDto) {
    return this.prisma.collection
      .update({
        where: { id },
        data: updateCollectionDto,
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
    return this.prisma.collection
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
