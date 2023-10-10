import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { CreatePaymentDto } from 'src/payments/dto/createPayment.dto';

@Injectable()
export class KafkaService {
  constructor(@Inject('PENSION_SYSTEM_SERVICE') private readonly clientKafka: ClientKafka) {}

  async requestPayment(newPayment: CreatePaymentDto) {
    await lastValueFrom(this.clientKafka.emit('new_payment', JSON.stringify(newPayment)));
  }
}
