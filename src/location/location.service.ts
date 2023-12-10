import { Injectable } from '@nestjs/common';
import { CreateLocationRequest } from './dto/location.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from './entities/location.entity';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location) private repository: Repository<Location>,
  ) {}
  async create(request: CreateLocationRequest) {
    const location = this.repository.create({
      address: request.address,
      manager: { id: request.managerId },
    });
    return await this.repository.save(location);
  }

  async findAll() {
    return await this.repository
      .createQueryBuilder('location')
      .leftJoinAndSelect('location.manager', 'manager')
      .getMany();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} location`;
  // }
  //
  // update(id: number, updateLocationDto: UpdateLocationDto) {
  //   return `This action updates a #${id} location`;
  // }

  async remove(id: string) {
    return await this.repository.delete({ id: id });
  }
}
