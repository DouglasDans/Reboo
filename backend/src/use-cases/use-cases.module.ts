import { Module } from '@nestjs/common'
import { AuthorUseCaseModule } from './author'

@Module({
  exports: [AuthorUseCaseModule],
})
export class UseCasesModule {}
