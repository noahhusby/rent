import {
  Column, Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AuditableEntity } from '../../util/auditable.entity';
import { Location } from '../../location/entities/location.entity';
import { Employee } from './employee.entity';

@Entity()
export class EmployeeLocation extends AuditableEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @JoinColumn()
  @ManyToOne(() => Location, (location) => location.employees)
  location: Location;

  @JoinColumn()
  @ManyToOne(() => Employee, (employee) => employee.locations)
  employee: Employee;

  @Column()
  hourlyWage: number;
}