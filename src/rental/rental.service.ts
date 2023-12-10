import { Injectable } from '@nestjs/common';
import { CreateRentalRequest, UpdateRentalRequest } from './dto/rental.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rental } from './entities/rental.entity';

@Injectable()
export class RentalService {
  constructor(
    @InjectRepository(Rental) private repository: Repository<Rental>,
  ) {}
  async create(request: CreateRentalRequest) {
    const rental = this.repository.create({
      customer: { id: request.customerId },
      product: { id: request.productId },
      rentalDate: request.rentalDate,
      dueDate: request.dueDate,
      cost: request.cost,
    });
    return await this.repository.save(rental);
  }

  async findAll() {
    return await this.repository
      .createQueryBuilder('rental')
      .leftJoinAndSelect('rental.customer', 'customer')
      .leftJoinAndSelect('rental.product', 'product')
      .getMany();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} rental`;
  // }
  //
  async update(id: string, request: UpdateRentalRequest) {
    return await this.repository.update(
      {
        id: id,
      },
      {
        returnDate: request.returnDate,
      },
    );
  }

  async remove(id: string) {
    return await this.repository.delete({ id: id });
  }
}
