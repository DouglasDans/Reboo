import { Module } from '@nestjs/common'
import { ReadingSessionFactoryService } from './reading-session.factory.service'
import { ReadingSessionUseCases } from './reading-session.use-cases'
import { ReadingSessionRepository } from 'src/core/repositories'
import { PrismaReadingSessionRepository } from 'src/frameworks/data-services/prisma/repositories'

@Module({
  providers: [
    ReadingSessionFactoryService,
    ReadingSessionUseCases,
    {
      provide: ReadingSessionRepository,
      useClass: PrismaReadingSessionRepository,
    },
  ],
  exports: [ReadingSessionFactoryService, ReadingSessionUseCases],
})
export class ReadingSessionUseCaseModule {}
