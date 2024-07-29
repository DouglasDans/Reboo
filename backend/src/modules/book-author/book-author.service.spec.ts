import { Test, TestingModule } from '@nestjs/testing';
import { BookAuthorService } from './book-author.service';

describe('BookAuthorService', () => {
  let service: BookAuthorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookAuthorService],
    }).compile();

    service = module.get<BookAuthorService>(BookAuthorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
