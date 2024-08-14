import { Module } from '@nestjs/common'
import { BookFactoryService } from './'
import { BookUseCases } from './'

@Module({
  providers: [BookFactoryService, BookUseCases],
  exports: [BookFactoryService, BookUseCases],
})
export class BookUseCaseModule {}
