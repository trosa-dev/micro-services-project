import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FindManyUsersUseCase {
  constructor(private prisma: PrismaService) {}

  async findAllUsers(): Promise<User[]> {
    const users = await this.prisma.user.findMany({
      orderBy: {
        id: 'desc',
      },
    });

    return users;
  }
}
