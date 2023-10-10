import { Module } from '@nestjs/common';
import { CreateUserUseCase } from './create-user.use-case';
import { FindManyUsersUseCase } from './findMany-users.use-case';
import { DeleteUserUseCase } from './delete-user.use-case';

@Module({
  providers: [CreateUserUseCase, FindManyUsersUseCase, DeleteUserUseCase],
  exports: [CreateUserUseCase, FindManyUsersUseCase, DeleteUserUseCase],
})
export class UsersUseCasesModule {}
