import { Injectable } from '@nestjs/common';
import { CreateSupplierRequest } from './dto/supplier.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Supplier } from './entities/supplier.entity';

@Injectable()
export class SupplierService {
  constructor(
    @InjectRepository(Supplier) private repository: Repository<Supplier>,
  ) {}
  async create(request: CreateSupplierRequest) {
    const supplier = this.repository.create({
      address: request.address,
      contactName: request.contactName,
      contactEmail: request.contactEmail,
      contactPhone: request.contactPhone,
    });
    return await this.repository.save(supplier);
  }

  async findAll() {
    return await this.repository.find();
  }
  //
  // findOne(id: number) {
  //   return `This action returns a #${id} supplier`;
  // }
  //
  // update(id: number, updateSupplierDto: UpdateSupplierDto) {
  //   return `This action updates a #${id} supplier`;
  // }

  async remove(id: string) {
    return await this.repository.delete({ id: id });
  }
}
