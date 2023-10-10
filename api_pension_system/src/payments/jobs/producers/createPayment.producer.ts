import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Job, Queue } from 'bull';
import { CreatePaymentDto } from 'src/payments/dto/createPayment.dto';
import { QUEUES } from '../queues';

@Injectable()
export class CreatePaymentProducer {
  constructor(
    @InjectQueue(QUEUES.payments.queue.name)
    private paymentsQueue: Queue,
  ) {}

  async createPayment(newPayment: CreatePaymentDto) {
    const job: Job<CreatePaymentDto> = await this.paymentsQueue.add(
      QUEUES.payments.jobs.newPaymentJob,
      newPayment,
      {
        removeOnFail: false,
      },
    );

    return job;
  }
}
