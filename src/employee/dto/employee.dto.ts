export class CreateEmployeeRequest {
  readonly name: string;
  readonly address: string;
  readonly email: string;
  readonly phoneNumber: string;
}

export class CreateEmployeeLocationRequest {
  readonly locationId: string;
  readonly employeeId: string;
  readonly hourlyWage: number;
}

export class ClockInRequest {
  readonly locationId: string;
  readonly employeeId: string;
  readonly clockedIn: Date;
}

export class ClockOutRequest {
  readonly locationId: string;
  readonly employeeId: string;
  readonly clockedOut: Date;
}
