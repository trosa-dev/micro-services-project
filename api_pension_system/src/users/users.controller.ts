import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/createUser.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Create user' })
  async createUser(@Body() createUserDto: CreateUserDto) {
    try {
      const user = await this.usersService.createUser(createUserDto);

      return user;
    } catch (error) {
      // Verifique se a mensagem de erro contém "Unique constraint failed on the fields: (`email`)"
      if (error.message.includes('Unique constraint failed on the fields: (`email`)')) {
        // Retorne um status HTTP 300
        throw new HttpException(
          { message: 'There is already a registered user with this email', error },
          HttpStatus.CONFLICT,
        );
      }
      throw new HttpException({ message: 'Unknown Error', error }, HttpStatus.BAD_REQUEST, error);
    }
  }

  @Get()
  @ApiOperation({ summary: 'List all users from DB' })
  async findAllUsers() {
    try {
      // Use o serviço Prisma para realizar a consulta ao banco de dados
      const users = await this.usersService.findAllUsers();

      return users;
    } catch (error) {
      return { msg: 'algo deu errado' };
    }
  }
}
