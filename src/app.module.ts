import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfigService } from './config/database';
import { EmployeeModule } from './employee/employee.module';
import { LocationModule } from './location/location.module';
import { ProductModule } from './product/product.module';
import { SupplierModule } from './supplier/supplier.module';
import { RequestModule } from './request/request.module';
import { RentalModule } from './rental/rental.module';
import { InventoryModule } from './inventory/inventory.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: PostgresConfigService,
      inject: [PostgresConfigService],
    }),
    CustomerModule,
    EmployeeModule,
    LocationModule,
    ProductModule,
    SupplierModule,
    RequestModule,
    RentalModule,
    InventoryModule,
  ],
  providers: [AppService],
})
export class AppModule {}
