import { Processor, Process, OnQueueActive } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Job } from 'bull';
import { KafkaService } from 'src/kafka/kafka.service';
import { CreatePaymentDto } from 'src/payments/dto/createPayment.dto';
import { CreatePaymentUseCase } from 'src/payments/use-cases/create-payment.use-case';
import { QUEUES } from '../queues';

@Injectable()
@Processor(QUEUES.payments.queue.name)
export class CreatePaymentConsumer {
  constructor(
    private createPaymentUseCase: CreatePaymentUseCase,
    private kafkaService: KafkaService,
  ) {}

  @Process(QUEUES.payments.jobs.newPaymentJob)
  async transcode(job: Job<CreatePaymentDto>) {
    const { data: newPayment } = job;

    await this.createPaymentUseCase.createPayment(newPayment);
    await this.kafkaService.requestPayment(newPayment);
  }

  @OnQueueActive()
  onActive(job: Job) {
    console.log(`Processing newPayment ${job.id} of type ${job.name}`);
  }
}
