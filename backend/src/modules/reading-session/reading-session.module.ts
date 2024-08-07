import { Module } from '@nestjs/common'
import { ReadingSessionService } from './reading-session.service'
import { ReadingSessionController } from './reading-session.controller'
import { PrismaService } from '../../prisma.service'

@Module({
  controllers: [ReadingSessionController],
  providers: [ReadingSessionService, PrismaService],
})
export class ReadingSessionModule {}
