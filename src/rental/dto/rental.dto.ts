export class CreateRentalRequest {
  readonly customerId: string;
  readonly productId: string;
  readonly rentalDate: Date;
  readonly dueDate: Date;
  readonly cost: number;
}

export class UpdateRentalRequest {
  readonly returnDate: Date;
}
