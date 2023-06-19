import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { RegisterUserInput } from './dto/register.Dto';
import { UpdateAuthInput } from './dto/update-auth.input';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';
import { jwtPayload } from './entities/jwt.payload';
import { AuthPayload } from './entities/auth.payload';
import { loginInput } from './dto/login.Dto';
@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async register(registerUserInput: RegisterUserInput): Promise<AuthPayload> {
    const userExists = await this.userService.findByEmail(
      registerUserInput.email,
    );
    if (userExists)
      throw new HttpException(
        'user exists with this credentials',
        HttpStatus.BAD_REQUEST,
      );
    const hashedPassword = await argon2.hash(registerUserInput.password);
    const user = await this.userService.register({
      password: hashedPassword,
      name: registerUserInput.name,
      email: registerUserInput.email,
    });
    const token = await this.getToken({ id: user.id, name: user.name });

    return { token, name: user.name };
  }

  async login(loginInput: loginInput): Promise<AuthPayload> {
    const user = await this.userService.findByEmailOrThrow(loginInput.email);
    const isValidPassword = await argon2.verify(
      user.password,
      loginInput.password,
    );

    if (!isValidPassword)
      throw new HttpException(
        'credentials arenot correct',
        HttpStatus.BAD_REQUEST,
      );
    const token = await this.getToken({ id: user.id, name: user.name });

    return { name: user.name, token };
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthInput: UpdateAuthInput) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }

  async getToken(jwtPayload: jwtPayload): Promise<string> {
    return await this.jwtService.signAsync(jwtPayload);
  }
}
