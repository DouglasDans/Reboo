import { Module } from '@nestjs/common'
import { DataServicesModule } from './services/data-services/data-services.module'

@Module({
  imports: [DataServicesModule],
})
export class AppModule {}
