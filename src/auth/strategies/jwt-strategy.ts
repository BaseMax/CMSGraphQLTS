import {
  HttpException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtPayload } from '../entities/jwt.payload';
import { Request } from 'express';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req: Request) => this.jwtExtractor(req),
      ]),
      ignoreExpiration: true,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  validate(validationPayload: jwtPayload) {
    return validationPayload;
  }

  jwtExtractor(request: Request) {
    const token = request.headers.authorization;


    if (!token) throw new UnauthorizedException();

    return token;
  }
}
