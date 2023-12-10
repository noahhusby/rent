import { HttpException, Injectable, Logger } from '@nestjs/common';
import {
  ClockInRequest,
  ClockOutRequest,
  CreateEmployeeLocationRequest,
  CreateEmployeeRequest,
} from './dto/employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './entities/employee.entity';
import { EmployeeLocation } from './entities/employee-location.entity';
import { EmployeeTimesheet } from './entities/employee-timesheet.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
    @InjectRepository(EmployeeLocation)
    private employeeLocationRepository: Repository<EmployeeLocation>,
    @InjectRepository(EmployeeTimesheet)
    private employeeTimesheetRepository: Repository<EmployeeTimesheet>,
  ) {}

  private readonly logger = new Logger(EmployeeService.name);

  async create(request: CreateEmployeeRequest) {
    const employee = this.employeeRepository.create({
      name: request.name,
      address: request.address,
      email: request.email,
      phoneNumber: request.phoneNumber,
    });
    return await this.employeeRepository.save(employee);
  }

  async addEmployeeLocation(request: CreateEmployeeLocationRequest) {
    const employeeLocation = this.employeeLocationRepository.create({
      location: { id: request.locationId },
      employee: { id: request.employeeId },
      hourlyWage: request.hourlyWage,
    });
    return await this.employeeLocationRepository.save(employeeLocation);
  }

  async clockIn(request: ClockInRequest) {
    const currentlyClockedOut = this.employeeTimesheetRepository.findOne({
      where: {
        location: { id: request.locationId },
        employee: { id: request.employeeId },
        clockedOut: null,
      },
    });
    if (currentlyClockedOut == null) {
      this.logger.warn(
        `Attempted to clock in with an ongoing timesheet for employee ${request.employeeId} at location ${request.locationId}`,
      );
      throw new HttpException(
        `Attempted to clock in with an ongoing timesheet for employee ${request.employeeId} at location ${request.locationId}`,
        400,
      );
    }
    const employeeTimesheet = this.employeeTimesheetRepository.create({
      location: { id: request.locationId },
      employee: { id: request.employeeId },
      clockedIn: request.clockedIn,
    });
    return await this.employeeTimesheetRepository.save(employeeTimesheet);
  }

  async clockOut(request: ClockOutRequest) {
    const currentlyClockedOut = this.employeeTimesheetRepository.findOne({
      where: {
        location: { id: request.locationId },
        employee: { id: request.employeeId },
        clockedOut: null,
      },
    });
    if (currentlyClockedOut != null) {
      this.logger.warn(
        `Attempted to clock out with no ongoing timesheet for employee ${request.employeeId} at location ${request.locationId}`,
      );
      throw new HttpException(
        `Attempted to clock out with no ongoing timesheet for employee ${request.employeeId} at location ${request.locationId}`,
        400,
      );
    }
    return await this.employeeTimesheetRepository.update(
      {
        location: { id: request.locationId },
        employee: { id: request.employeeId },
        clockedOut: null,
      },
      {
        clockedOut: request.clockedOut,
      },
    );
  }

  async findAll() {
    return await this.employeeRepository.find();
  }

  // update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
  //   return `This action updates a #${id} employee`;
  // }

  async remove(id: string) {
    return await this.employeeRepository.delete({ id: id });
  }
}
