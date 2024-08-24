import { Module } from '@nestjs/common'
import { PublisherFactoryService } from './publisher.factory.service'
import { PublisherService } from './publisher.service'
import { PublisherRepository } from 'src/core/repositories'
import { PrismaPublisherRepository } from 'src/frameworks/data-services/prisma/repositories'
import { DataServicesModule } from 'src/services/data-services/data-services.module'

@Module({
  imports: [DataServicesModule],
  providers: [
    PublisherFactoryService,
    PublisherService,
    {
      provide: PublisherRepository,
      useClass: PrismaPublisherRepository,
    },
  ],
  exports: [PublisherFactoryService, PublisherService],
})
export class PublisherUseCaseModule {}
