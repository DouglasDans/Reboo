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
import { CreateCollectionDto, UpdateCollectionDto } from 'src/core/dtos'
import { CollectionUseCases } from 'src/use-cases/collection'

@Controller('api/v1/collection')
export class CollectionController {
  constructor(private readonly collectionUseCases: CollectionUseCases) {}

  @Post()
  create(@Body() createCollectionDto: CreateCollectionDto) {
    return this.collectionUseCases.createCollection(createCollectionDto)
  }

  @Get()
  findAll() {
    return this.collectionUseCases.getAllCollections()
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.collectionUseCases.getCollectionById(id)
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCollectionDto: UpdateCollectionDto,
  ) {
    return this.collectionUseCases.updateCollection(id, updateCollectionDto)
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.collectionUseCases.deleteCollection(id)
  }
}
