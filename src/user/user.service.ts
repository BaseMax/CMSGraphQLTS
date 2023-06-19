import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { RegisterUserInput } from 'src/auth/dto/register.Dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserInput } from './Dto/user-update.input';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  async register(registerUserInput: RegisterUserInput): Promise<User> {
    return this.prisma.user.create({
      data: { ...registerUserInput },
    });
  }
  async findByEmailOrThrow(email: string): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user)
      throw new HttpException(
        'user with this credentials doesnot exist',
        HttpStatus.BAD_REQUEST,
      );
    return user;
  }
  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }
  async findByEmail(email: string): Promise<User> {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
