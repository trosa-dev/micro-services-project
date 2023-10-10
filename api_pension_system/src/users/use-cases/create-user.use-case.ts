import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from '../dto/createUser.dto';

@Injectable()
export class CreateUserUseCase {
  constructor(private prisma: PrismaService) {}

  async createUser(data: CreateUserDto): Promise<User> {
    const user = await this.prisma.user.create({
      data: {
        email: data.email,
        name: data.name,
      },
    });
    return user;
  }

  async deleteUser(userId: number): Promise<User> {
    const deletedUser = await this.prisma.user.delete({
      where: {
        id: userId,
      },
    });

    return deletedUser;
  }
}
