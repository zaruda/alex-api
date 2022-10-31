import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Subscription } from '../../subscriptions/entities/subscription.entity';

@Entity()
export class Application extends BaseEntity {
  @PrimaryColumn({ unique: true })
  id: string;

  @Column('simple-array', { nullable: true, default: [] })
  public benefits: string[] | null;

  @Column('json', { nullable: true, default: null })
  public additionalData: string;

  @OneToMany(() => Subscription, (subscription) => subscription.application, {
    eager: true,
    cascade: true,
  })
  subscriptions: Subscription[];
}
