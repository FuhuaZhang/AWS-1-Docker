import { Controller, Get, Response } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Response() response): void {
    response.header('Access-Control-Allow-Origin', '*');
    response.send(this.appService.getHello());
  }
}
