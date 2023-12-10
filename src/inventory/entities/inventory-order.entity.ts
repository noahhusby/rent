import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';
import { AuditableEntity } from '../../util/auditable.entity';
import { Employee } from '../../employee/entities/employee.entity';
import { OrderDetail } from './order-detail.entity';

@Entity()
export class InventoryOrder extends AuditableEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @JoinColumn({ name: 'placed_by' })
  @ManyToOne(() => Employee, (employee) => employee.inventoryOrders)
  employee: Employee;

  @Column()
  total: number;

  @OneToMany(() => OrderDetail, (orderDetail) => orderDetail.order)
  details: Relation<OrderDetail>[];
}