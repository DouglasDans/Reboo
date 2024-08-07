import { Test, TestingModule } from '@nestjs/testing'
import { ReadingSessionService } from './reading-session.service'

describe('ReadingSessionService', () => {
  let service: ReadingSessionService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReadingSessionService],
    }).compile()

    service = module.get<ReadingSessionService>(ReadingSessionService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
