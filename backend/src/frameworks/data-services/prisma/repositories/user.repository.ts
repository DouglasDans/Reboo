import { UserRepository } from 'src/core/repositories'
import { PrismaService } from '../prisma.service'
import { User } from 'src/core/entities'

export class PrismaUserRepository implements UserRepository {
  private prisma: PrismaService
  constructor(prisma: PrismaService) {
    this.prisma = prisma
  }

  create(item: User): Promise<User> {
    return this.prisma.user.create({
      data: {
        name: item.name,
        email: item.email,
        password: item.password,
        bio: item.bio,
        profileImage: item.profileImage,
        google_id: item.googleId,
      },
    })
  }

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany()
  }

  findById(id: number): Promise<User> {
    return this.prisma.user.findUnique({
      where: { id },
    })
  }

  update(id: number, item: User): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data: {
        name: item.name,
        email: item.email,
        password: item.password,
        bio: item.bio,
        profileImage: item.profileImage,
        google_id: item.googleId,
      },
    })
  }

  delete(id: number): Promise<User> {
    return this.prisma.user.delete({ where: { id } })
  }
}
