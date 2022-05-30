import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

import { IAppSettings } from './models/IAppSettings';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData(): IAppSettings {
    return this.appService.getData();
  }
}
