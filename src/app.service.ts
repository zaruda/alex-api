import * as fs from 'fs';
import * as path from 'path';
import { Injectable } from '@nestjs/common';

import { IAppSettings } from './models/IAppSettings';

@Injectable()
export class AppService {
  private repository: IAppSettings;

  constructor() {
    const data = fs.readFileSync(
      path.resolve('src', './app.mock.json'),
      'utf8',
    );

    this.repository = JSON.parse(data);
  }

  getData(): IAppSettings {
    return this.repository;
  }
}
