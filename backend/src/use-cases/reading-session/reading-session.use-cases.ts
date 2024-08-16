import { Injectable } from '@nestjs/common'
import { ReadingSessionRepository } from 'src/core/repositories/reading-session.repository'
import { ReadingSessionFactoryService } from './reading-session.factory.service'
import { ReadingSession } from 'src/core/entities'
import { CreateReadingSessionDto, UpdateReadingSessionDto } from 'src/core/dtos'

@Injectable()
export class ReadingSessionUseCases {
  constructor(
    private readingSession: ReadingSessionRepository,
    private readingSessionFactory: ReadingSessionFactoryService,
  ) {}

  getAllReadingSessions(): Promise<ReadingSession[]> {
    return this.readingSession.findAll()
  }

  getAllReadingSessionsByUserId(): Promise<ReadingSession[]> {
    return this.readingSession.findAll()
  }

  getReadingSessionById(id: number): Promise<ReadingSession> {
    return this.readingSession.findById(id)
  }

  createReadingSession(
    createReadingSessionDto: CreateReadingSessionDto,
  ): Promise<ReadingSession> {
    const readingSession = this.readingSessionFactory.createNewReadingSession(
      createReadingSessionDto,
    )
    return this.readingSession.create(readingSession)
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
