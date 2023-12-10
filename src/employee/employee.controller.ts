import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import {
  ClockInRequest,
  ClockOutRequest,
  CreateEmployeeLocationRequest,
  CreateEmployeeRequest,
} from './dto/employee.dto';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  create(@Body() request: CreateEmployeeRequest) {
    return this.employeeService.create(request);
  }

  @Get()
  findAll() {
    return this.employeeService.findAll();
  }

  @Post('clock-in')
  clockIn(@Body() request: ClockInRequest) {
    return this.employeeService.clockIn(request);
  }

  @Post('clock-out')
  clockOut(@Body() request: ClockOutRequest) {
    return this.employeeService.clockOut(request);
  }

  @Post('location')
  createEmployeeLocation(@Body() request: CreateEmployeeLocationRequest) {
    return this.employeeService.addEmployeeLocation(request);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.employeeService.findOne(+id);
  // }
  //
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateEmployeeDto: UpdateEmployeeDto) {
  //   return this.employeeService.update(+id, updateEmployeeDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeService.remove(id);
  }
}
