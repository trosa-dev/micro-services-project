import { Module } from '@nestjs/common';
import { KafkaService } from './kafka.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { KafkaController } from './kafka.controller';
import { PaymentService } from 'src/payment/payment.service';
import { RegisterPaymentUseCase } from 'src/payment/use-cases/register-payment.use-case';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PAYMENT_GATEWAY',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'payment_gateway',
            brokers: [`${process.env.KAFKA_HOST}:${process.env.KAFKA_PORT}`],
          },
        },
      },
    ]),
  ],
  providers: [KafkaService, PaymentService, RegisterPaymentUseCase],
  exports: [KafkaService],
  controllers: [KafkaController],
})
export class KafkaModule {}
