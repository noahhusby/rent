import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';
import { AuditableEntity } from '../../util/auditable.entity';
import { Employee } from '../../employee/entities/employee.entity';
import { Request } from '../../request/entities/request.entity';
import { Inventory } from '../../inventory/entities/inventory.entity';
import { EmployeeLocation } from '../../employee/entities/employee-location.entity';

@Entity()
export class Location extends AuditableEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  address: string;

  @ManyToOne(() => Employee, (employee) => employee.locationsManaged)
  manager: Employee;

  @OneToMany(() => Request, (request) => request.location)
  requests: Relation<Request>[];

  @OneToMany(() => Inventory, (inventory) => inventory.location)
  inventory: Relation<Inventory>[];

  @OneToMany(
    () => EmployeeLocation,
    (employeeLocation) => employeeLocation.location,
  )
  employees: Relation<EmployeeLocation>[];
}
