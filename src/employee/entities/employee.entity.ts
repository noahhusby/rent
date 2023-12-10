import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';
import { AuditableEntity } from '../../util/auditable.entity';
import { Location } from '../../location/entities/location.entity';
import { InventoryOrder } from '../../inventory/entities/inventory-order.entity';
import { EmployeeLocation } from './employee-location.entity';

@Entity()
export class Employee extends AuditableEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  email: string;

  @Column()
  phoneNumber: string;

  @OneToMany(() => Location, (location) => location.manager)
  locationsManaged: Relation<Location>[];

  @OneToMany(() => InventoryOrder, (inventoryOrder) => inventoryOrder.employee)
  inventoryOrders: Relation<InventoryOrder>[];

  @OneToMany(
    () => EmployeeLocation,
    (employeeLocation) => employeeLocation.employee,
  )
  locations: Relation<EmployeeLocation>[];
}
