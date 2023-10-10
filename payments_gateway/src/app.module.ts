import { HeartbeatModule } from './heartbeat/heartbeat.module';
import { Module } from '@nestjs/common';
import { PaymentModule } from './payment/payment.module';
import { PrismaModule } from './prisma/prisma.module';
import { KafkaModule } from './kafka/kafka.module';
import { AppGateway } from './websocket/websocket.gateway';

@Module({
  imports: [
    HeartbeatModule,
    AppGateway,
    PaymentModule,
    PrismaModule,
    KafkaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
