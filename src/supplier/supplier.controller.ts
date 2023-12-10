import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { SupplierService } from './supplier.service';
import { CreateSupplierRequest } from './dto/supplier.dto';

@Controller('supplier')
export class SupplierController {
  constructor(private readonly supplierService: SupplierService) {}

  @Post()
  create(@Body() request: CreateSupplierRequest) {
    return this.supplierService.create(request);
  }

  @Get()
  findAll() {
    return this.supplierService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.supplierService.findOne(+id);
  // }
  //
  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateSupplierDto: UpdateSupplierDto,
  // ) {
  //   return this.supplierService.update(+id, updateSupplierDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.supplierService.remove(id);
  }
}
