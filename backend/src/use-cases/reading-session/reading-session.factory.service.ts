import { Injectable } from '@nestjs/common'
import { CreateReadingSessionDto, UpdateReadingSessionDto } from 'src/core/dtos'
import { ReadingSession } from 'src/core/entities'

@Injectable()
export class ReadingSessionFactoryService {
  createNewReadingSession(createReadingSessionDto: CreateReadingSessionDto) {
    const readingSession = new ReadingSession()
    readingSession.startDate = createReadingSessionDto.startDate
    readingSession.endDate = createReadingSessionDto.endDate
    readingSession.pagesRead = createReadingSessionDto.pagesRead
    readingSession.bookId = createReadingSessionDto.bookId
    readingSession.userId = createReadingSessionDto.userId

    return readingSession
  }
  updateNewReadingSession(updateReadingSessionDto: UpdateReadingSessionDto) {
    const readingSession = new ReadingSession()
    readingSession.startDate = updateReadingSessionDto.startDate
    readingSession.endDate = updateReadingSessionDto.endDate
    readingSession.pagesRead = updateReadingSessionDto.pagesRead
    readingSession.bookId = updateReadingSessionDto.bookId
    readingSession.userId = updateReadingSessionDto.userId

    return readingSession
  }
}
