import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';
import { PaymentsUseCasesModule } from './use-cases/payments.use-cases.module';
import { JobsModule } from './jobs/jobs.module';

@Module({
  imports: [PaymentsUseCasesModule, JobsModule],
  controllers: [PaymentsController],
  providers: [PaymentsService],
  exports: [PaymentsService],
})
export class PaymentsModule {}
