import { Module } from '@nestjs/common';
import { ApplicationsService } from './application.service';
import { ApplicationsController } from './application.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Application } from './entities/application.entity';
import { Subscription } from './entities/subscription.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Application, Subscription])],
  controllers: [ApplicationsController],
  providers: [ApplicationsService],
})
export class ApplicationsModule {}
