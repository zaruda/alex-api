import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Subscription } from '../application/entities/subscription.entity';

@Injectable()
export class SubscriptionsService {
  constructor(
    @InjectRepository(Subscription)
    private repository: Repository<Subscription>,
  ) {}

  findAll() {
    return this.repository.find();
  }
}
