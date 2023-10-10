import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { RegisterPaymentUseCasesModule } from './use-cases/register-payments.use-cases.module';
import { KafkaModule } from 'src/kafka/kafka.module';

@Module({
  imports: [RegisterPaymentUseCasesModule, KafkaModule],
  providers: [PaymentService],
  controllers: [],
})
export class PaymentModule {}
