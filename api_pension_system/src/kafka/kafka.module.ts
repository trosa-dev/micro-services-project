import { Module } from '@nestjs/common';
import { KafkaService } from './kafka.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { KafkaController } from './kafka.controller';
import { AppGateway } from 'src/websocket/websocket.gateway';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PENSION_SYSTEM_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'api_pension_system',
            brokers: [`${process.env.KAFKA_HOST}:${process.env.KAFKA_PORT}`],
          },
        },
      },
    ]),
  ],
  providers: [KafkaService, AppGateway],
  exports: [KafkaService],
  controllers: [KafkaController],
})
export class KafkaModule {}
