import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from '../util/snake-naming.strategy';
import { Customer } from '../customer/entities/customer.entity';
import { Employee } from '../employee/entities/employee.entity';
import { EmployeeLocation } from '../employee/entities/employee-location.entity';
import { EmployeeTimesheet } from '../employee/entities/employee-timesheet.entity';
import { Inventory } from '../inventory/entities/inventory.entity';
import { InventoryOrder } from '../inventory/entities/inventory-order.entity';
import { Location } from '../location/entities/location.entity';
import { OrderDetail } from '../inventory/entities/order-detail.entity';
import { Product } from '../product/entities/product.entity';
import { Rental } from '../rental/entities/rental.entity';
import { Supplier } from '../supplier/entities/supplier.entity';
import { Request } from '../request/entities/request.entity';

@Injectable()
export class PostgresConfigService implements TypeOrmOptionsFactory {
  constructor() {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'postgres',
      entities: [
        Customer,
        Employee,
        EmployeeLocation,
        EmployeeTimesheet,
        Inventory,
        InventoryOrder,
        Location,
        OrderDetail,
        Product,
        Rental,
        Request,
        Supplier,
      ],
      synchronize: true,
      ssl: false,
      logging: true,
      namingStrategy: new SnakeNamingStrategy(),
    };
  }
}
