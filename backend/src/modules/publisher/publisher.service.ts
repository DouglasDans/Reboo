import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { CreatePublisherDto } from '../../core/dtos/publisher.dto'
import { UpdatePublisherDto } from './dto/update-publisher.dto'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class PublisherService {
  constructor(private prisma: PrismaService) {}

  create(createPublisherDto: CreatePublisherDto) {
    return this.prisma.publisher.create({
      data: createPublisherDto,
    })
  }

  findAll() {
    return this.prisma.publisher.findMany()
  }

  findByName(name: string) {
    return this.prisma.publisher
      .findFirstOrThrow({
        where: { name: name },
      })
      .catch(() => {
        return null
      })
  }

  findOne(id: number) {
    return this.prisma.publisher
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

  update(id: number, updatePublisherDto: UpdatePublisherDto) {
    return this.prisma.publisher
      .update({
        where: { id },
        data: updatePublisherDto,
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
    return this.prisma.publisher
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
