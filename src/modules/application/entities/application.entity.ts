import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Subscription } from './subscription.entity';

@Entity()
export class Application extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column('simple-array')
  public benefits: string[];

  @OneToMany(() => Subscription, (subscription) => subscription.application, {
    eager: true,
    cascade: true,
  })
  subscriptions: Subscription[];
}
