import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class AppGateway {
  @WebSocketServer()
  server: Server;

  emitApprovedMsg() {
    this.server.emit('processed_payment_approved', {
      message: 'New Processed Payment',
    });
  }

  emitRejectedMsg() {
    this.server.emit('processed_payment_rejected', {
      message: 'New Processed Payment',
    });
  }
}
