import { Injectable } from '@nestjs/common'
import { ReadingSessionRepository } from 'src/core/repositories/reading-session.repository'
import { ReadingSessionFactoryService } from './reading-session.factory.service'
import { ReadingSession } from 'src/core/entities'
import { CreateReadingSessionDto, UpdateReadingSessionDto } from 'src/core/dtos'
import { BookService } from '../book'

@Injectable()
export class ReadingSessionService {
  constructor(
    private readingSession: ReadingSessionRepository,
    private readingSessionFactory: ReadingSessionFactoryService,
    private book: BookService,
  ) {}

  getAllReadingSessions(): Promise<ReadingSession[]> {
    return this.readingSession.findAll()
  }

  getAllReadingSessionsByUserId(userId: number): Promise<ReadingSession[]> {
    return this.readingSession.findAllByUserId(userId)
  }

  getReadingSessionById(id: number, userId: number): Promise<ReadingSession> {
    return this.readingSession.findById(id, userId)
  }

  async createReadingSession(
    createReadingSessionDto: CreateReadingSessionDto,
  ): Promise<ReadingSession> {
    const readingSession = this.readingSessionFactory.createNewReadingSession(
      createReadingSessionDto,
    )

    const createdReadingSession =
      await this.readingSession.create(readingSession)

    const book = await this.book.getBookById(
      createdReadingSession.bookId.toString(),
    )

    await this.book.updateBook(book.id, {
      pagesRead: book.pagesRead + createdReadingSession.pagesRead,
    })

    return createdReadingSession
  }

  updateReadingSession(
    readingSessionId: number,
    updateReadingSessionDto: UpdateReadingSessionDto,
  ) {
    const readingSession = this.readingSessionFactory.updateNewReadingSession(
      updateReadingSessionDto,
    )
    return this.readingSession.update(readingSessionId, readingSession)
  }

  deleteReadingSession(readingSessionId: number) {
    return this.readingSession.delete(readingSessionId)
  }
}
