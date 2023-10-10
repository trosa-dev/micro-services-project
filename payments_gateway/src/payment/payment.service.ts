import { KafkaService } from 'src/kafka/kafka.service';
import { Injectable } from '@nestjs/common';
import { PaymentStatus, RegisterPaymentDto } from './dto/register-payment.dto';
import { RegisterPaymentUseCase } from './use-cases/register-payment.use-case';
import { sleep } from 'src/utils/sleep';

@Injectable()
export class PaymentService {
  constructor(
    private registerPaymentUseCase: RegisterPaymentUseCase,
    private kafkaService: KafkaService,
  ) {}
  async processPayment(newPayment: RegisterPaymentDto) {
    await sleep(1_000);

    if (Math.random() < 0.5) {
      const registeredPayment =
        await this.registerPaymentUseCase.registerPayment({
          ...newPayment,
          status: PaymentStatus.APPROVED,
        });

      await this.kafkaService.approvedPayment(newPayment);

      return registeredPayment;
    } else {
      await this.registerPaymentUseCase.registerPayment({
        ...newPayment,
        status: PaymentStatus.REJECTED,
      });

      await this.kafkaService.rejectedPayment(newPayment);

      throw 'Payment was rejected';
    }
  }
}
