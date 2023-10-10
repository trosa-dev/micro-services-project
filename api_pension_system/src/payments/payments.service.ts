import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/createPayment.dto';
import { CreatePaymentProducer } from './jobs/producers/createPayment.producer';
import { FindManyPaymentsUseCase } from './use-cases/findMany-payments.use-case';

@Injectable()
export class PaymentsService {
  constructor(
    private createPaymentProducer: CreatePaymentProducer,
    private findManyPaymentsUseCase: FindManyPaymentsUseCase,
  ) {}

  async findAllPayments() {
    const payments = await this.findManyPaymentsUseCase.findAllPayments();

    return payments;
  }

  async createPayment(newPayment: CreatePaymentDto) {
    const job = await this.createPaymentProducer.createPayment(newPayment);

    return job;
  }
}
