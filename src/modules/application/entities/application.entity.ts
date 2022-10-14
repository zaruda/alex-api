import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Subscription } from './subscription.entity';

@Entity()
export class Application extends BaseEntity {
  @PrimaryColumn({ unique: true })
  id: string;

  @Column('simple-array')
  public benefits: string[];

  @Column('json', { nullable: true, default: null })
  public additionalData: string;

  @OneToMany(() => Subscription, (subscription) => subscription.application, {
    eager: true,
    cascade: true,
  })
  subscriptions: Subscription[];
}
