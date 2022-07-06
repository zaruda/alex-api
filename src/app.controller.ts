import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';

import { IAppSettings } from './models/IAppSettings';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getApps(): IAppSettings[] {
    return this.appService.getApps();
  }

  @Post()
  async createApp(@Body() createAppDto: IAppSettings): Promise<IAppSettings> {
    return await this.appService.createApp(createAppDto);
  }

  @Get(':id')
  getAppById(@Param('id') id: string): IAppSettings {
    try {
      return this.appService.getAppById(id);
    } catch (err) {
      throw new NotFoundException((err as Error).message);
    }
  }

  @Put(':id')
  async updateApp(
    @Param('id') id: string,
    @Body() updateAppDto: IAppSettings,
  ): Promise<IAppSettings> {
    try {
      return await this.appService.updateAppById(id, updateAppDto);
    } catch (err) {
      throw new NotFoundException((err as Error).message);
    }
  }

  @Delete(':id')
  async deleteApp(@Param('id') id: string): Promise<void> {
    await this.appService.deleteAppById(id);
  }
}
