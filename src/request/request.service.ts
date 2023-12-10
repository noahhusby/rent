import { Injectable } from '@nestjs/common';
import { CreateRequestReq } from './dto/request.dto';
import { Request } from './entities/request.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RequestService {
  constructor(
    @InjectRepository(Request) private repository: Repository<Request>,
  ) {}
  async create(request: CreateRequestReq) {
    const req = this.repository.create({
      customer: { id: request.customerId },
      product: { id: request.productId },
      location: { id: request.locationId },
    });
    return await this.repository.save(req);
  }

  async findAll() {
    return await this.repository.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} request`;
  // }
  //
  // update(id: number, updateRequestDto: UpdateRequestDto) {
  //   return `This action updates a #${id} request`;
  // }

  async remove(id: string) {
    return await this.repository.delete({ id: id });
  }
}
