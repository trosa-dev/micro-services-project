import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { RegisterPaymentDto } from 'src/payment/dto/register-payment.dto';

@Injectable()
export class KafkaService {
  constructor(
    @Inject('PAYMENT_GATEWAY') private readonly clientKafka: ClientKafka,
  ) {}

  async approvedPayment(processedPayment: RegisterPaymentDto) {
    try {
      await lastValueFrom(
        this.clientKafka.emit(
          'approved_payment',
          JSON.stringify(processedPayment),
        ),
      );
    } catch (error) {
      console.error(error);
    }
  }

  async rejectedPayment(processedPayment: RegisterPaymentDto) {
    try {
      await lastValueFrom(
        this.clientKafka.emit(
          'rejected_payment',
          JSON.stringify(processedPayment),
        ),
      );
    } catch (error) {
      console.error(error);
    }
  }
}
