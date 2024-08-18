import { Module } from '@nestjs/common'
import { PublisherFactoryService } from './publisher.factory.service'
import { PublisherUseCases } from './publisher.use-cases'
import { PublisherRepository } from 'src/core/repositories'
import { PrismaPublisherRepository } from 'src/frameworks/data-services/prisma/repositories'
import { DataServicesModule } from 'src/services/data-services/data-services.module'

@Module({
  imports: [DataServicesModule],
  providers: [
    PublisherFactoryService,
    PublisherUseCases,
    {
      provide: PublisherRepository,
      useClass: PrismaPublisherRepository,
    },
  ],
  exports: [PublisherFactoryService, PublisherUseCases],
})
export class PublisherUseCaseModule {}
