import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseIntPipe,
} from '@nestjs/common'
import { CreateReadingSessionDto, UpdateReadingSessionDto } from 'src/core/dtos'
import { ReadingSessionService } from 'src/use-cases/reading-session'

@Controller('api/v1/reading-session')
export class ReadingSessionController {
  constructor(private readonly readingSessionUseCases: ReadingSessionService) {}

  @Post()
  create(@Body() createReadingSessionDto: CreateReadingSessionDto) {
    return this.readingSessionUseCases.createReadingSession(
      createReadingSessionDto,
    )
  }

  @Get()
  findAll(@Query('userId', ParseIntPipe) userId: number) {
    return this.readingSessionUseCases.getAllReadingSessionsByUserId(userId)
  }

  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe) id: number,
    @Query('userId', ParseIntPipe) userId: number,
  ) {
    return this.readingSessionUseCases.getReadingSessionById(id, userId)
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateReadingSessionDto: UpdateReadingSessionDto,
  ) {
    return this.readingSessionUseCases.updateReadingSession(
      id,
      updateReadingSessionDto,
    )
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.readingSessionUseCases.deleteReadingSession(id)
  }
}
