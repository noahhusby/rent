import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { RentalService } from './rental.service';
import { CreateRentalRequest, UpdateRentalRequest } from './dto/rental.dto';

@Controller('rental')
export class RentalController {
  constructor(private readonly rentalService: RentalService) {}

  @Post()
  create(@Body() request: CreateRentalRequest) {
    return this.rentalService.create(request);
  }

  @Get()
  findAll() {
    return this.rentalService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.rentalService.findOne(+id);
  // }
  //
  @Patch(':id')
  update(@Param('id') id: string, @Body() request: UpdateRentalRequest) {
    return this.rentalService.update(id, request);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rentalService.remove(id);
  }
}
