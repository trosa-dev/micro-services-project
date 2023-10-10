import { CreatePaymentUseCase } from 'src/payments/use-cases/create-payment.use-case';
import { Module } from '@nestjs/common';
import { FindManyPaymentsUseCase } from './findMany-payments.use-case';

@Module({
  imports: [],
  providers: [CreatePaymentUseCase, FindManyPaymentsUseCase],
  exports: [CreatePaymentUseCase, FindManyPaymentsUseCase],
})
export class PaymentsUseCasesModule {}
