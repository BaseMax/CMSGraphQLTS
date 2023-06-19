import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserService } from 'src/user/user.service';
import { JwtStrategy } from './strategies/jwt-strategy';

@Module({
  imports: [
    JwtModule.register({
      global: true,

      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '15m' },
    }),
    UserModule,PrismaModule
  ],
  providers: [AuthResolver, AuthService,UserService,JwtStrategy],
})
export class AuthModule {}
