import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';
import { AuditableEntity } from '../../util/auditable.entity';
import { Request } from '../../request/entities/request.entity';
import { Rental } from '../../rental/entities/rental.entity';

@Entity()
export class Customer extends AuditableEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  email: string;

  @OneToMany(() => Request, (request) => request.customer)
  requests: Relation<Request>[];

  @OneToMany(() => Rental, (rental) => rental.customer)
  rentals: Relation<Rental>[];
}
