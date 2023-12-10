import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne, PrimaryGeneratedColumn,
} from 'typeorm';
import { AuditableEntity } from '../../util/auditable.entity';
import { Location } from '../../location/entities/location.entity';
import { Employee } from './employee.entity';

@Entity()
export class EmployeeTimesheet extends AuditableEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @JoinColumn()
  @ManyToOne(() => Location, (location) => location.employees)
  location: Location;

  @JoinColumn()
  @ManyToOne(() => Employee, (employee) => employee.locations)
  employee: Employee;

  @CreateDateColumn({
    type: 'timestamp',
  })
  clockedIn: Date;

  @CreateDateColumn({
    type: 'timestamp',
  })
  clockedOut: Date;
}
