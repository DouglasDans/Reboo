import { Module } from '@nestjs/common'
import { ReadingSessionFactoryService } from './reading-session.factory.service'
import { ReadingSessionUseCases } from './reading-session.use-cases'

@Module({
  providers: [ReadingSessionFactoryService, ReadingSessionUseCases],
  exports: [ReadingSessionFactoryService, ReadingSessionUseCases],
})
export class ReadingSessionUseCaseModule {}
