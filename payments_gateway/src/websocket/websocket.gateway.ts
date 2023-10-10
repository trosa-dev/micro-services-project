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

  sendMessageToAll() {
    this.server.emit('message', {
      message: 'Mensagem enviada em ' + new Date(),
    });
  }
}
