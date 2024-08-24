import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common'
import { CreatePublisherDto, UpdatePublisherDto } from 'src/core/dtos'
import { PublisherService } from 'src/use-cases/publisher'

@Controller('api/v1/publisher')
export class PublisherController {
  constructor(private readonly publisherUseCases: PublisherService) {}

  @Post()
  create(@Body() createPublisherDto: CreatePublisherDto) {
    return this.publisherUseCases.createPublisher(createPublisherDto)
  }

  @Get()
  findAll() {
    return this.publisherUseCases.getAllPublishers()
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.publisherUseCases.getPublisherById(id)
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePublisherDto: UpdatePublisherDto,
  ) {
    return this.publisherUseCases.updatePublisher(id, updatePublisherDto)
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.publisherUseCases.deletePublisher(id)
  }
}
