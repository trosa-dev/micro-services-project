import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from 'src/payments/dto/createPayment.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CreatePaymentUseCase {
  constructor(private prismaService: PrismaService) {}

  async createPayment(newPayment: CreatePaymentDto) {
    try {
      const createdPayment = await this.prismaService.payment.create({
        data: {
          status: 'new',
          value: newPayment.value,
          userId: newPayment.userId,
          pension: newPayment.pension,
          identifier: newPayment.identifier,
        },
      });

      return createdPayment;
    } catch (error) {
      console.log(error);
    }
  }
}
