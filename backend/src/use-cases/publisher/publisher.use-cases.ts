import { Injectable } from '@nestjs/common'
import { PublisherRepository } from 'src/core/repositories/publisher.repository'
import { PublisherFactoryService } from './publisher.factory.service'
import { Publisher } from 'src/core/entities'
import { CreatePublisherDto, UpdatePublisherDto } from 'src/core/dtos'

@Injectable()
export class PublisherUseCases {
  constructor(
    private publisher: PublisherRepository,
    private publisherFactory: PublisherFactoryService,
  ) {}

  getAllPublishers(): Promise<Publisher[]> {
    return this.publisher.findAll()
  }

  getPublisherById(id: string): Promise<Publisher> {
    return this.publisher.findById(parseInt(id))
  }

  createPublisher(createPublisherDto: CreatePublisherDto): Promise<Publisher> {
    const publisher =
      this.publisherFactory.createNewPublisher(createPublisherDto)
    return this.publisher.create(publisher)
  }

  updatePublisher(publisherId: string, updatePublisherDto: UpdatePublisherDto) {
    const publisher =
      this.publisherFactory.updateNewPublisher(updatePublisherDto)
    return this.publisher.update(parseInt(publisherId), publisher)
  }

  deletePublisher(publisherId: string) {
    return this.publisher.delete(parseInt(publisherId))
  }
}
