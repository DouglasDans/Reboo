import { ReadingSession } from '../entities'

export abstract class ReadingSessionRepository {
  abstract findAll(): Promise<ReadingSession[]>

  abstract findAllByUserId(userId: number): Promise<ReadingSession[]>

  abstract findById(id: number, userId: number): Promise<ReadingSession>

  abstract create(item: ReadingSession): Promise<ReadingSession>

  abstract update(id: number, item: ReadingSession): Promise<ReadingSession>

  abstract delete(id: number): Promise<ReadingSession>
}
