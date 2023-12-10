import {Column, Entity, OneToMany, PrimaryGeneratedColumn, Relation} from 'typeorm';
import { AuditableEntity } from '../../util/auditable.entity';
import {Request} from "../../request/entities/request.entity";
import {Rental} from "../../rental/entities/rental.entity";
import {Inventory} from "../../inventory/entities/inventory.entity";
import {OrderDetail} from "../../inventory/entities/order-detail.entity";

@Entity()
export class Product extends AuditableEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  publisher: string;

  @Column()
  releaseDate: Date;

  @OneToMany(() => Request, (request) => request.product)
  requests: Relation<Request>[];

  @OneToMany(() => Rental, (rental) => rental.product)
  rentals: Relation<Rental>[];

  @OneToMany(() => Inventory, (inventory) => inventory.product)
  inventory: Relation<Inventory>[];

  @OneToMany(() => OrderDetail, (orderDetail) => orderDetail.product)
  details: Relation<OrderDetail>[];
}
