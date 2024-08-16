import { Injectable } from '@nestjs/common'
import { CollectionRepository } from '../../core/repositories/collection.repository'
import { CollectionFactoryService } from './collection.factory.service'
import { Collection } from 'src/core/entities'
import { CreateCollectionDto, UpdateCollectionDto } from 'src/core/dtos'

@Injectable()
export class CollectionUseCases {
  constructor(
    private collection: CollectionRepository,
    private collectionFactory: CollectionFactoryService,
  ) {}

  getAllCollections(): Promise<Collection[]> {
    return this.collection.findAll()
  }

  getCollectionById(id: number): Promise<Collection> {
    return this.collection.findById(id)
  }

  createCollection(
    createCollectionDto: CreateCollectionDto,
  ): Promise<Collection> {
    const collection =
      this.collectionFactory.createNewCollection(createCollectionDto)
    return this.collection.create(collection)
  }

  updateCollection(
    collectionId: number,
    updateCollectionDto: UpdateCollectionDto,
  ) {
    const collection =
      this.collectionFactory.updateNewCollection(updateCollectionDto)
    return this.collection.update(collectionId, collection)
  }

  deleteCollection(collectionId: number) {
    return this.collection.delete(collectionId)
  }
}
