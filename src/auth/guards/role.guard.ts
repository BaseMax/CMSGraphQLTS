import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { Role } from 'src/user/entities/user.entity';
import { ROLES_KEY } from '../decorators/set-role';

@Injectable()
export class RoleGuard {
  constructor(private reflector: Reflector) {}
  canActivate(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);

    const requiredRoles = this.getRequiredRoles(ctx);
    if (!requiredRoles) return true;
    const c = ctx.getContext();
    const userRole = c.req?.user?.role;

    if (!this.matchsRoles(requiredRoles, userRole))
      throw new HttpException(
        "you don't have adequate permission to access this.",
        HttpStatus.FORBIDDEN,
      );
  }

  matchsRoles(roles: string[], userRole: string) {
    return roles.some((role) => role === userRole);
  }
  getRequiredRoles(ctx: ExecutionContext) {
    return this.reflector.getAllAndOverride(ROLES_KEY, [
      ctx.getHandler(),
      ctx.getClass(),
    ]);
  }
}
