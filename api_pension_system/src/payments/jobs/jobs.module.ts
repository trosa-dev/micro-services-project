import { Module } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { MiddlewareBuilder } from '@nestjs/core';
import { createBullBoard } from 'bull-board';
import { BullAdapter } from 'bull-board/bullAdapter';
import { BullModule } from '@nestjs/bull';
import { QUEUES } from './queues';
import { CreatePaymentProducer } from './producers/createPayment.producer';
import { CreatePaymentConsumer } from './consumers/createPayment.consumer';
import { CreatePaymentUseCase } from 'src/payments/use-cases/create-payment.use-case';
import { PrismaService } from 'src/prisma/prisma.service';
import { KafkaModule } from 'src/kafka/kafka.module';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: process.env.REDIS_HOST,
        port: Number(process.env.REDIS_PORT),
      },
    }),
    BullModule.registerQueue({
      name: QUEUES.payments.queue.name,
    }),
    KafkaModule,
  ],
  providers: [CreatePaymentProducer, CreatePaymentUseCase, PrismaService, CreatePaymentConsumer],
  exports: [CreatePaymentProducer],
})
export class JobsModule {
  constructor(@InjectQueue(QUEUES.payments.queue.name) private paymentsQueue: Queue) {}
  configure(consumer: MiddlewareBuilder) {
    const { router } = createBullBoard([new BullAdapter(this.paymentsQueue)]);
    consumer.apply(router).forRoutes('/queues');
  }
}
