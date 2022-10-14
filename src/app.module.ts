import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppConfigModule } from 'src/config/config.module';
import { AppConfigService } from 'src/config/config.service';

import { ApplicationsModule, SubscriptionsModule } from './modules';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [AppConfigModule],
      useFactory: (configService: AppConfigService) => ({
        type: 'postgres',
        host: configService.dbHost,
        port: +configService.dbPort,
        username: configService.dbUsername,
        password: configService.dbPassword,
        database: configService.dbName,
        autoLoadEntities: true,
        synchronize: process.env.NODE_ENV === 'development',
        migrationsTableName: 'migrations',
        migrations: ['dist/src/migrations/*.ts'],
        ssl: {
          rejectUnauthorized: false,
        },
      }),
      inject: [AppConfigService],
    }),
    ApplicationsModule,
    SubscriptionsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
