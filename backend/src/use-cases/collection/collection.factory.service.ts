import { Injectable } from '@nestjs/common'
import { CreateCollectionDto, UpdateCollectionDto } from 'src/core/dtos'
import { Collection } from 'src/core/entities'

@Injectable()
export class CollectionFactoryService {
  createNewCollection(createCollectionDto: CreateCollectionDto) {
    const collection = new Collection()
    collection.name = createCollectionDto.name
    collection.backgroundColors = createCollectionDto.backgroundColors
    collection.userId = createCollectionDto.userId

    return collection
  }
  updateNewCollection(updateCollectionDto: UpdateCollectionDto) {
    const collection = new Collection()
    collection.name = updateCollectionDto.name
    collection.backgroundColors = updateCollectionDto.backgroundColors
    collection.userId = updateCollectionDto.userId

    return collection
  }
}
