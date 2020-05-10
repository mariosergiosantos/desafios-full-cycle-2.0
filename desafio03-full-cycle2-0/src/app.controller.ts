import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() { }

  @Get('/sender')
  @Render('sender')
  getSender() { }

  @Get('/receiver')
  @Render('receiver')
  getReceiver() { }
}
