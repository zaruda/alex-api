import * as fs from 'fs';
import * as path from 'path';
import { Injectable } from '@nestjs/common';

import { IAppSettings } from './models/IAppSettings';

@Injectable()
export class AppService {
  private repository: IAppSettings[];

  constructor() {
    fs.readFile(
      path.resolve('src', './app.mock.json'),
      { encoding: 'utf8' },
      (err, data) => {
        this.repository = JSON.parse(data);
      },
    );
  }

  getApps(): IAppSettings[] {
    return this.repository;
  }

  async createApp(data: IAppSettings): Promise<IAppSettings> {
    await this.updateRepositoryAsync([...this.repository, data]);

    return data;
  }

  getAppById(id: string): IAppSettings {
    const app = this.repository.find((r) => r.id === id);
    if (!app) {
      throw new Error('Application not found');
    }

    return app;
  }

  async updateAppById(id: string, data: IAppSettings): Promise<IAppSettings> {
    const appIndex = this.repository.findIndex((r) => r.id === id);

    console.log(appIndex);

    if (appIndex === -1) {
      throw new Error('Application not found');
    }

    const newRepository = [...this.repository];
    newRepository.splice(appIndex, 1, data);

    await this.updateRepositoryAsync(newRepository);

    return data;
  }

  async deleteAppById(id: string): Promise<void> {
    await this.updateRepositoryAsync([
      ...this.repository.filter((r) => r.id !== id),
    ]);
  }

  private async updateRepositoryAsync(
    newRepository: IAppSettings[],
  ): Promise<IAppSettings[]> {
    await fs.promises.writeFile(
      path.resolve('src', './app.mock.json'),
      JSON.stringify(newRepository),
      { encoding: 'utf8' },
    );

    this.repository = newRepository;

    return this.repository;
  }
}
