import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DeleteUserUseCase {
  constructor(private prisma: PrismaService) {}

  async deleteUser(userId: number): Promise<User> {
    const deletedUser = await this.prisma.user.delete({
      where: {
        id: userId,
      },
    });

    return deletedUser;
  }
}
