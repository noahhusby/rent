import { Module } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { InventoryController } from './inventory.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inventory } from './entities/inventory.entity';
import { InventoryOrder } from './entities/inventory-order.entity';
import { OrderDetail } from './entities/order-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Inventory, InventoryOrder, OrderDetail])],
  controllers: [InventoryController],
  providers: [InventoryService],
})
export class InventoryModule {}
