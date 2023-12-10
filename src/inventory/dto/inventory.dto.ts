import { OrderDetail } from '../entities/order-detail.entity';

export class CreateInventoryRequest {
  readonly locationId: string;
  readonly productId: string;
  readonly quantity: number;
}

export class CreateInventoryOrder {
  readonly employeeId: string;
  readonly total: number;
  readonly orderDetails: OrderDetailDto[];
}

export class OrderDetailDto {
  readonly productId: string;
  readonly quantity: number;
}

export class UpdateInventoryRequest {
    readonly quantity: number;
}