import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AuditableEntity } from '../../util/auditable.entity';
import { Customer } from '../../customer/entities/customer.entity';
import { Product } from '../../product/entities/product.entity';
import {Location} from "../../location/entities/location.entity";

@Entity()
export class Request extends AuditableEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Customer, (customer) => customer.requests)
  customer: Customer;

  @ManyToOne(() => Product, (product) => product.requests)
  product: Product;

  @ManyToOne(() => Location, (location) => location.requests)
  location: Location;
}
