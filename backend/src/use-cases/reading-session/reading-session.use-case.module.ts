import { Module } from '@nestjs/common'
import { ReadingSessionFactoryService } from './reading-session.factory.service'
import { ReadingSessionService } from './reading-session.service'
import { ReadingSessionRepository } from 'src/core/repositories'
import { PrismaReadingSessionRepository } from 'src/frameworks/data-services/prisma/repositories'
import { DataServicesModule } from 'src/services/data-services/data-services.module'

@Module({
  imports: [DataServicesModule],
  providers: [
    ReadingSessionFactoryService,
    ReadingSessionService,
    {
      provide: ReadingSessionRepository,
      useClass: PrismaReadingSessionRepository,
    },
  ],
  exports: [ReadingSessionFactoryService, ReadingSessionService],
})
export class ReadingSessionUseCaseModule {}
