import { Injectable } from '@nestjs/common';
import { CreateCustomerRequest } from './dto/customer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer) private repository: Repository<Customer>,
  ) {}
  async create(request: CreateCustomerRequest) {
    const customer = this.repository.create({
      name: request.name,
      address: request.address,
      email: request.email,
    });
    return await this.repository.save(customer);
  }

  async findAll() {
    return await this.repository.find();
  }

  async remove(id: string) {
    return await this.repository.delete({
      id: id,
    });
  }
}
