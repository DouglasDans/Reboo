import { Module } from '@nestjs/common'
import { PrismaModule } from 'src/frameworks/data-services/prisma/prisma.module'

@Module({
  imports: [PrismaModule],
  exports: [PrismaModule],
})
export class DataServicesModule {}
