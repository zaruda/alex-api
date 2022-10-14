import { Controller, Get } from '@nestjs/common';
import { SubscriptionsService } from './subscriptions.service';

@Controller('/subscriptions/all')
export class SubscriptionsController {
  constructor(private readonly applicationsService: SubscriptionsService) {}

  @Get()
  findAll() {
    return this.applicationsService.findAll();
  }
}
