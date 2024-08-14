import { Module } from '@nestjs/common'
import { PublisherFactoryService } from './publisher.factory.service'
import { PublisherUseCases } from './publisher.use-cases'

@Module({
  providers: [PublisherFactoryService, PublisherUseCases],
  exports: [PublisherFactoryService, PublisherUseCases],
})
export class PublisherUseCaseModule {}
