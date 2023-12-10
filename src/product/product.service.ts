import { Injectable } from '@nestjs/common';
import { CreateProductRequest } from './dto/product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private repository: Repository<Product>,
  ) {}

  async create(request: CreateProductRequest) {
    const product = this.repository.create({
      title: request.title,
      publisher: request.publisher,
      releaseDate: request.releaseDate,
    });
    return await this.repository.save(product);
  }

  async findAll() {
    return await this.repository.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} product`;
  // }
  //
  // update(id: number, updateProductDto: UpdateProductDto) {
  //   return `This action updates a #${id} product`;
  // }

  async remove(id: string) {
    return await this.repository.delete({ id: id });
  }
}
