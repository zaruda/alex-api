import { BaseEntity, Column, Entity, PrimaryColumn, ManyToOne } from 'typeorm';
import { Application } from './application.entity';

@Entity()
export class Subscription extends BaseEntity {
  @PrimaryColumn({ unique: true })
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true, default: null })
  benefits: string | null;

  @Column()
  price: string;

  @Column({ nullable: true, default: null })
  period: string | null;

  @ManyToOne(() => Application, (application) => application.subscriptions, {
    orphanedRowAction: 'delete',
  })
  application: Application;
}
