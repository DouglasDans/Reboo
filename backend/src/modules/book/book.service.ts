import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { CreateBookDto } from './dto/create-book.dto'
import { UpdateBookDto } from './dto/update-book.dto'
import { PrismaService } from 'src/prisma.service'
import { PublisherService } from '../publisher/publisher.service'
import { BookAuthorService } from '../book-author/book-author.service'
import { BookCategoryService } from '../book-category/book-category.service'
import { bookResponse, publisherResponse } from '../../types/responseTypes'
import { BookCollectionService } from '../book-collection/book-collection.service'

@Injectable()
export class BookService {
  constructor(
    private prisma: PrismaService,
    private publisherService: PublisherService,
    private bookAuthorService: BookAuthorService,
    private bookCategoryService: BookCategoryService,
    private bookCollectionService: BookCollectionService,
  ) {}

  async create(createBookDto: CreateBookDto) {
    let publisher = (await this.getIfExistsPublisherByName(
      createBookDto.publisher,
    )) as publisherResponse

    if (!publisher) {
      publisher = (await this.publisherService.create({
        name: createBookDto.publisher,
      })) as publisherResponse
    }

    const createdBook = (await this.prisma.book.create({
      data: {
        title: createBookDto.title,
        isbn_10: createBookDto.isbn_10,
        isbn_13: createBookDto.isbn_13,
        totalPages: createBookDto.totalPages,
        pagesRead: createBookDto.pagesRead,
        publicationDate: createBookDto.publicationDate,
        description: createBookDto.description,
        status: createBookDto.status,
        coverImage: createBookDto.coverImage || null,
        backgroundColors: createBookDto.backgroundColors || null,
        language: createBookDto.language || null,
        publisherId: publisher.id,
        userId: createBookDto.userId,
      },
    })) as bookResponse

    createBookDto.author.forEach((author) => {
      this.bookAuthorService.createRelation(createdBook.id, author)
    })

    createBookDto.category.forEach((category) => {
      this.bookCategoryService.createRelation(createdBook.id, category)
    })

    if (createBookDto.collectionId) {
      this.bookCollectionService.createRelation(
        createdBook.id,
        createBookDto.collectionId,
      )
    }

    return createdBook
  }

  findAll() {
    return this.prisma.book.findMany({
      include: {
        publisher: true,
        authors: {
          select: { author: true },
        },
        categories: {
          select: { category: true },
        },
      },
    })
  }

  findAllByUserId(userId: number) {
    return this.prisma.book.findMany({
      where: {
        userId: userId,
      },
      include: {
        publisher: true,
        authors: {
          select: { author: true },
        },
        categories: {
          select: { category: true },
        },
      },
    })
  }

  findOne(id: number) {
    return this.prisma.book
      .findUniqueOrThrow({
        where: { id },
      })
      .catch((e) => {
        throw new HttpException(
          {
            message: 'Book not found - ' + e,
            statusCode: HttpStatus.NOT_FOUND,
          },
          HttpStatus.NOT_FOUND,
        )
      })
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return this.prisma.book
      .update({
        where: { id },
        data: {
          title: updateBookDto.title,
          isbn_10: updateBookDto.isbn_10,
          isbn_13: updateBookDto.isbn_13,
          totalPages: updateBookDto.totalPages,
          pagesRead: updateBookDto.pagesRead,
          publicationDate: updateBookDto.publicationDate,
          description: updateBookDto.description,
          status: updateBookDto.status,
          coverImage: updateBookDto.coverImage,
          backgroundColors: updateBookDto.backgroundColors,
          language: updateBookDto.language,
        },
      })
      .catch((e) => {
        throw new HttpException(
          {
            message: 'Book not found - ' + e.meta.cause,
            statusCode: HttpStatus.NOT_FOUND,
          },
          HttpStatus.NOT_FOUND,
        )
      })
  }

  remove(id: number) {
    this.prisma.bookCategory.deleteMany({
      where: {
        bookId: id,
      },
    })

    this.prisma.bookAuthor.deleteMany({
      where: {
        bookId: id,
      },
    })

    this.prisma.bookCollection.deleteMany({
      where: {
        bookId: id,
      },
    })

    return this.prisma.book
      .delete({
        where: { id },
      })
      .catch((e) => {
        throw new HttpException(
          {
            message: 'Book not found - ' + e.meta.cause,
            statusCode: HttpStatus.NOT_FOUND,
          },
          HttpStatus.NOT_FOUND,
        )
      })
  }

  private async getIfExistsPublisherByName(name: string) {
    return this.publisherService.findByName(name)
  }
}
