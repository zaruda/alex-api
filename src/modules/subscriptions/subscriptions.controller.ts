import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';
import { SubscriptionsService } from './subscriptions.service';

@Controller('/subscriptions')
export class SubscriptionsController {
  constructor(private readonly subscriptionsService: SubscriptionsService) {}

  @Get('all')
  findAll() {
    return this.subscriptionsService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.subscriptionsService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateSubscriptionDto: UpdateSubscriptionDto,
  ) {
    return this.subscriptionsService.update(id, updateSubscriptionDto);
  }
}
