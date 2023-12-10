import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { LocationService } from './location.service';
import { CreateLocationRequest } from './dto/location.dto';

@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Post()
  create(@Body() request: CreateLocationRequest) {
    return this.locationService.create(request);
  }

  @Get()
  findAll() {
    return this.locationService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.locationService.findOne(+id);
  // }
  //
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateLocationDto: UpdateLocationDto) {
  //   return this.locationService.update(+id, updateLocationDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.locationService.remove(id);
  }
}
