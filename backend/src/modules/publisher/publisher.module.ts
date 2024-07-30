import { Module } from '@nestjs/common'
import { PublisherService } from './publisher.service'
import { PublisherController } from './publisher.controller'
import { PrismaService } from 'src/prisma.service'

@Module({
  controllers: [PublisherController],
  providers: [PublisherService, PrismaService],
})
export class PublisherModule {}
