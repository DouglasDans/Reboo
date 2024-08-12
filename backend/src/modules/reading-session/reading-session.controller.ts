import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common'
import { ReadingSessionService } from './reading-session.service'
import { CreateReadingSessionDto } from '../../core/dtos/reading-session.dto'
import { UpdateReadingSessionDto } from './dto/update-reading-session.dto'

@Controller('api/v1/reading-session')
export class ReadingSessionController {
  constructor(private readonly readingSessionService: ReadingSessionService) {}

  @Post()
  create(@Body() createReadingSessionDto: CreateReadingSessionDto) {
    return this.readingSessionService.create(createReadingSessionDto)
  }

  @Get()
  findAll(@Query('userId') userId: string) {
    return this.readingSessionService.findAllByUserId(+userId)
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Query('userId') userId: string) {
    return this.readingSessionService.findOne(+id, +userId)
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateReadingSessionDto: UpdateReadingSessionDto,
  ) {
    return this.readingSessionService.update(+id, updateReadingSessionDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.readingSessionService.remove(+id)
  }
}
