import { Module } from '@nestjs/common';
import { AppGateway } from './websocket.gateway';

@Module({
  imports: [],
  controllers: [],
  providers: [AppGateway],
  exports: [AppGateway],
})
export class WebSocketModule {}
