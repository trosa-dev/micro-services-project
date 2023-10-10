import { Module } from '@nestjs/common';
import { JobsModule } from './payments/jobs/jobs.module';
import { KafkaModule } from './kafka/kafka.module';
import { PrismaModule } from './prisma/prisma.module';
import { PaymentsModule } from './payments/payments.module';
import { UsersModule } from './users/users.module';
import { WebSocketModule } from './websocket/websocket.module';
import { HeartbeatModule } from './heartbeat/heartbeat.module';

@Module({
  imports: [
    HeartbeatModule,
    WebSocketModule,
    JobsModule,
    KafkaModule,
    PaymentsModule,
    PrismaModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
