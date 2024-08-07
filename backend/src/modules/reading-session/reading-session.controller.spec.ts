import { Test, TestingModule } from '@nestjs/testing'
import { ReadingSessionController } from './reading-session.controller'
import { ReadingSessionService } from './reading-session.service'

describe('ReadingSessionController', () => {
  let controller: ReadingSessionController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReadingSessionController],
      providers: [ReadingSessionService],
    }).compile()

    controller = module.get<ReadingSessionController>(ReadingSessionController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
