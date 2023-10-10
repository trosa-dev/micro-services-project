import { Injectable } from '@nestjs/common';
import { Payment } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FindManyPaymentsUseCase {
  constructor(private prisma: PrismaService) {}

  async findAllPayments(): Promise<Payment[]> {
    const payments = await this.prisma.payment.findMany({
      orderBy: [
        {
          id: 'desc',
        },
      ],
    });

    return payments;
  }
}
