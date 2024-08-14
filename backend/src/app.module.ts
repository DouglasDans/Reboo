import { Module } from '@nestjs/common'
import { DataServicesModule } from './services/data-services/data-services.module'
import { AuthorUseCaseModule } from './use-cases/author'

@Module({
  imports: [DataServicesModule, AuthorUseCaseModule],
})
export class AppModule {}
