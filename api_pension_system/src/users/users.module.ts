import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersUseCasesModule } from './use-cases/users.use-cases.module';

@Module({
  imports: [UsersUseCasesModule],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
