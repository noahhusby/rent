import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { EmployeeLocation } from './entities/employee-location.entity';
import { EmployeeTimesheet } from './entities/employee-timesheet.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Employee, EmployeeLocation, EmployeeTimesheet]),
  ],
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
export class EmployeeModule {}
