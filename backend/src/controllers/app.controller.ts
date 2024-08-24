import { Controller, Get } from '@nestjs/common'

@Controller()
export class AppController {
  constructor() {}

  @Get()
  getHello(): string {
    return 'Reboo Book Tracker - Hello World!'
  }
}
