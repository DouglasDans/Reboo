import { Injectable } from '@nestjs/common'
import { CreatePublisherDto, UpdatePublisherDto } from 'src/core/dtos'
import { Publisher } from 'src/core/entities'

@Injectable()
export class PublisherFactoryService {
  createNewPublisher(createPublisherDto: CreatePublisherDto) {
    const publisher = new Publisher()
    publisher.name = createPublisherDto.name

    return publisher
  }
  updateNewPublisher(updatePublisherDto: UpdatePublisherDto) {
    const publisher = new Publisher()
    publisher.name = updatePublisherDto.name

    return publisher
  }
}
