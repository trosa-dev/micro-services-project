import { ApiTags } from '@nestjs/swagger';
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PaymentService } from 'src/payment/payment.service';
import { RegisterPaymentDto } from 'src/payment/dto/register-payment.dto';

@ApiTags('Payment')
@Controller('payment')
export class KafkaController {
  constructor(private readonly paymentService: PaymentService) {}

  @MessagePattern('new_payment')
  async processPayment(@Payload() message: RegisterPaymentDto) {
    try {
      await this.paymentService.processPayment(message);
      console.log('Payment Accepted!');
    } catch (error) {
      console.error('Payment Rejected!');
    }
  }
}
