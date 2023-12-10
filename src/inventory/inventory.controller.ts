import {Controller, Get, Post, Body, Param, Delete, Patch} from '@nestjs/common';
import { InventoryService } from './inventory.service';
import {
  CreateInventoryOrder,
  CreateInventoryRequest, UpdateInventoryRequest,
} from './dto/inventory.dto';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Post()
  createInventory(@Body() request: CreateInventoryRequest) {
    return this.inventoryService.createInventory(request);
  }

  @Post('order')
  createInventoryOrder(@Body() request: CreateInventoryOrder) {
    return this.inventoryService.createInventoryOrder(request);
  }

  @Get()
  findAllInventory() {
    return this.inventoryService.findAllInventory();
  }

  @Get('order')
  findAllInventoryOrders() {
    return this.inventoryService.findAllInventoryOrders();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() request: UpdateInventoryRequest) {
    return this.inventoryService.updateInventory(id, request);
  }

  @Delete(':id')
  removeInventory(@Param('id') id: string) {
    return this.inventoryService.removeInventory(id);
  }
}
