import { ReadingSession } from '../entities'

export abstract class ReadingSessionRepository {
  abstract findAll(): Promise<ReadingSession[]>

  abstract findById(id: number): Promise<ReadingSession>

  abstract create(item: ReadingSession): Promise<ReadingSession>

  abstract update(id: number, item: ReadingSession): Promise<ReadingSession>

  abstract delete(id: number): Promise<ReadingSession>
}
