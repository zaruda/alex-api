import { BaseEntity, Column, Entity, PrimaryColumn, ManyToOne } from 'typeorm';
import { Application } from './application.entity';

@Entity()
export class Subscription extends BaseEntity {
  @PrimaryColumn({ unique: true })
  id: string;

  @Column()
  name: string;

  @Column()
  benefits: string;

  @Column()
  price: string;

  @Column()
  period: string;

  @ManyToOne(() => Application, (application) => application.subscriptions, {
    orphanedRowAction: 'delete',
  })
  application: Application;
}
