import { Injectable } from '@nestjs/common';
import {
  CreateInventoryOrder,
  CreateInventoryRequest,
  UpdateInventoryRequest,
} from './dto/inventory.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Inventory } from './entities/inventory.entity';
import { InventoryOrder } from './entities/inventory-order.entity';
import { OrderDetail } from './entities/order-detail.entity';

@Injectable()
export class InventoryService {
  constructor(
    @InjectRepository(Inventory)
    private inventoryRepository: Repository<Inventory>,
    @InjectRepository(InventoryOrder)
    private inventoryOrderRepository: Repository<InventoryOrder>,
    @InjectRepository(OrderDetail)
    private orderDetailsRepository: Repository<OrderDetail>,
  ) {}
  async createInventory(request: CreateInventoryRequest) {
    const inventory = this.inventoryRepository.create({
      location: { id: request.locationId },
      product: { id: request.productId },
      quantity: request.quantity,
    });
    return await this.inventoryRepository.save(inventory);
  }

  async createInventoryOrder(request: CreateInventoryOrder) {
    const inventoryOrderStruct = this.inventoryOrderRepository.create({
      employee: { id: request.employeeId },
      total: request.total,
    });
    const inventoryOrder =
      await this.inventoryOrderRepository.save(inventoryOrderStruct);
    for (const orderDetail of request.orderDetails) {
      const orderDetailStruct = this.orderDetailsRepository.create({
        order: inventoryOrder,
        product: { id: orderDetail.productId },
        quantity: orderDetail.quantity,
      });
      await this.orderDetailsRepository.save(orderDetailStruct);
    }
    return inventoryOrder;
  }

  async updateInventory(id: string, request: UpdateInventoryRequest) {
    return await this.inventoryRepository.update(
      { id: id },
      {
        quantity: request.quantity,
      },
    );
  }

  async findAllInventory() {
    return await this.inventoryRepository.find();
  }

  async findAllInventoryOrders() {
    return await this.inventoryOrderRepository.find();
  }

  async removeInventory(id: string) {
    return await this.inventoryRepository.delete({ id: id });
  }
}
