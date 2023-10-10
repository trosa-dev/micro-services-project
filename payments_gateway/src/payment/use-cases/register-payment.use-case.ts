import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterPaymentDto } from '../dto/register-payment.dto';

@Injectable()
export class RegisterPaymentUseCase {
  constructor(private prismaService: PrismaService) {}

  async registerPayment(newPayment: RegisterPaymentDto) {
    try {
      const { identifier, status, value } = newPayment;
      const createdPayment = await this.prismaService.payment.create({
        data: {
          identifier,
          status,
          value,
        },
      });

      return createdPayment;
    } catch (error) {
      console.error(error);
    }
  }
}
