import { Module } from '@nestjs/common'
import { AuthorModule } from './author/author.module'

@Module({
  imports: [AuthorModule],
})
export class AppModule {}
