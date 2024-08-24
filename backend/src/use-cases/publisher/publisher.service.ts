import { Injectable } from '@nestjs/common'
import { PublisherRepository } from 'src/core/repositories/publisher.repository'
import { PublisherFactoryService } from './publisher.factory.service'
import { Publisher } from 'src/core/entities'
import { CreatePublisherDto, UpdatePublisherDto } from 'src/core/dtos'

@Injectable()
export class PublisherService {
  constructor(
    private publisher: PublisherRepository,
    private publisherFactory: PublisherFactoryService,
  ) {}

  getAllPublishers(): Promise<Publisher[]> {
    return this.publisher.findAll()
  }

  getPublisherByName(name: string): Promise<Publisher> {
    return this.publisher.findByName(name)
  }

  getPublisherById(id: number): Promise<Publisher> {
    return this.publisher.findById(id)
  }

  async createPublisher(
    createPublisherDto: CreatePublisherDto,
  ): Promise<Publisher> {
    const existentPublisher = await this.verifyIfExistsPublisherByName(
      createPublisherDto.name,
    )

    if (!existentPublisher) {
      const publisher =
        await this.publisherFactory.createNewPublisher(createPublisherDto)
      return this.publisher.create(publisher)
    }
    return existentPublisher
  }

  updatePublisher(publisherId: number, updatePublisherDto: UpdatePublisherDto) {
    const publisher =
      this.publisherFactory.updateNewPublisher(updatePublisherDto)
    return this.publisher.update(publisherId, publisher)
  }

  deletePublisher(publisherId: number) {
    return this.publisher.delete(publisherId)
  }

  private verifyIfExistsPublisherByName(name: string) {
    return this.getPublisherByName(name)
  }
}
