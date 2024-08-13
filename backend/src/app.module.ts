import { Module } from '@nestjs/common'
import { DataServicesModule } from './services/data-services/data-services.module'
import { UseCasesModule } from './use-cases/use-cases.module'

@Module({
  imports: [DataServicesModule, UseCasesModule],
})
export class AppModule {}
