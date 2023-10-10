import { ApiTags } from '@nestjs/swagger';
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProcessedPaymentDto } from './dto/processedPayment.dto';
import { AppGateway } from 'src/websocket/websocket.gateway';

@ApiTags('Payment')
@Controller('payment')
export class KafkaController {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly appGateWay: AppGateway,
  ) {}

  @MessagePattern('approved_payment')
  async approvedPayment(@Payload() message: ProcessedPaymentDto) {
    try {
      await this.prismaService.payment.updateMany({
        data: {
          status: 'approved',
        },
        where: {
          identifier: message.identifier,
        },
      });
      this.appGateWay.emitApprovedMsg();
    } catch (error) {
      console.log(error);
    }
  }

  @MessagePattern('rejected_payment')
  async rejectedPayment(@Payload() message: ProcessedPaymentDto) {
    try {
      await this.prismaService.payment.updateMany({
        data: {
          status: 'rejected',
        },
        where: {
          identifier: message.identifier,
        },
      });
      this.appGateWay.emitRejectedMsg();
    } catch (error) {
      console.error(error);
    }
  }
}
