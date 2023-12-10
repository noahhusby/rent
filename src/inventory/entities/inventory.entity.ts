import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from '../../product/entities/product.entity';
import { Location } from '../../location/entities/location.entity';
import { AuditableEntity } from '../../util/auditable.entity';

@Entity()
export class Inventory extends AuditableEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @JoinColumn()
  @ManyToOne(() => Location, (location) => location.inventory)
  location: Location;

  @JoinColumn()
  @ManyToOne(() => Product, (product) => product.inventory)
  product: Product;

  @Column()
  quantity: number;
}
