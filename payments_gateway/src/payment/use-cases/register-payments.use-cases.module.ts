import { Module } from '@nestjs/common';
import { RegisterPaymentUseCase } from './register-payment.use-case';

@Module({
  providers: [RegisterPaymentUseCase],
  exports: [RegisterPaymentUseCase],
})
export class RegisterPaymentUseCasesModule {}
