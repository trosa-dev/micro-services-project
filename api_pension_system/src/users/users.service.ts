import { DeleteUserUseCase } from './use-cases/delete-user.use-case';
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { CreateUserDto } from './dto/createUser.dto';
import { CreateUserUseCase } from './use-cases/create-user.use-case';
import { FindManyUsersUseCase } from './use-cases/findMany-users.use-case';

@Injectable()
export class UsersService {
  constructor(
    private createUserUseCase: CreateUserUseCase,
    private findManyUsersUseCase: FindManyUsersUseCase,
    private deleteUserUseCase: DeleteUserUseCase,
  ) {}

  async findAllUsers(): Promise<User[]> {
    const users = await this.findManyUsersUseCase.findAllUsers();

    return users;
  }

  async createUser(data: CreateUserDto): Promise<User> {
    const user = await this.createUserUseCase.createUser({
      email: data.email,
      name: data.name,
    });
    return user;
  }

  async deleteUser(userId: number): Promise<User> {
    const deletedUser = await this.deleteUserUseCase.deleteUser(userId);

    return deletedUser;
  }
}
