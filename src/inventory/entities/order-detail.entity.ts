import {Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn} from 'typeorm';
import { AuditableEntity } from '../../util/auditable.entity';
import { Product } from '../../product/entities/product.entity';
import { InventoryOrder } from './inventory-order.entity';

@Entity()
export class OrderDetail extends AuditableEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @JoinColumn()
  @ManyToOne(() => InventoryOrder, (inventoryOrder) => inventoryOrder.details)
  order: InventoryOrder;

  @JoinColumn()
  @ManyToOne(() => Product, (product) => product.details)
  product: Product;

  @Column()
  quantity: number;
}
