import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { CreateReadingSessionDto } from '../../core/dtos/reading-session.dto'
import { UpdateReadingSessionDto } from './dto/update-reading-session.dto'
import { PrismaService } from '../../prisma.service'
import { bookResponse, bookSessionResponse } from '../../@types/responseTypes'

@Injectable()
export class ReadingSessionService {
  constructor(private prisma: PrismaService) {}

  async create(createReadingSessionDto: CreateReadingSessionDto) {
    const createdSession = (await this.prisma.readingSession.create({
      data: createReadingSessionDto,
    })) as bookSessionResponse

    const book = (await this.prisma.book.findUnique({
      where: {
        id: createdSession.bookId,
      },
    })) as bookResponse

    await this.prisma.book.update({
      where: {
        id: book.id,
      },
      data: {
        pagesRead: book.pagesRead + createdSession.pagesRead,
      },
    })

    return createdSession
  }

  findAllByUserId(userId: number) {
    return this.prisma.readingSession.findMany({
      where: {
        userId: userId,
      },
      include: {
        book: true,
      },
    })
  }

  findOne(id: number, userId: number) {
    return this.prisma.readingSession
      .findUniqueOrThrow({
        where: { id, userId },
        include: {
          book: true,
        },
      })
      .catch((e) => {
        throw new HttpException(
          {
            message: 'Session not found - ' + e,
            statusCode: HttpStatus.NOT_FOUND,
          },
          HttpStatus.NOT_FOUND,
        )
      })
  }

  update(id: number, updateReadingSessionDto: UpdateReadingSessionDto) {
    return this.prisma.readingSession
      .update({
        where: { id },
        data: updateReadingSessionDto,
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
    return this.prisma.readingSession
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
