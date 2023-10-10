import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export enum PaymentStatus {
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
}

export class RegisterPaymentDto {
  @IsNotEmpty()
  @IsNumber()
  value: number;

  @IsNotEmpty()
  @IsString()
  identifier: string;

  @IsString()
  status: PaymentStatus;
}
