import { Test, TestingModule } from '@nestjs/testing';
import { BookCollectionService } from './book-collection.service';

describe('BookCollectionService', () => {
  let service: BookCollectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookCollectionService],
    }).compile();

    service = module.get<BookCollectionService>(BookCollectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
