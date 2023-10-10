import { Body, Controller, Get, Post } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { CreatePaymentDto } from './dto/createPayment.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Payments')
@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post()
  @ApiOperation({ summary: 'Create payment to an user' })
  async createPayment(@Body() createPaymentDto: CreatePaymentDto) {
    try {
      const job = await this.paymentsService.createPayment({
        ...createPaymentDto,
        identifier: String(new Date().getTime()),
      });

      return job;
    } catch (error) {
      console.log(error);
    }
  }

  @Get()
  @ApiOperation({ summary: 'List all payments from DB' })
  async findAll() {
    try {
      // Use o serviço Prisma para realizar a consulta ao banco de dados
      const seusDados = await this.paymentsService.findAllPayments();

      return seusDados;
    } catch (error) {
      return { msg: 'algo deu errado' };
    }
  }
}
