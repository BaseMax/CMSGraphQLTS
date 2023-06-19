import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Auth } from './entities/auth.entity';
import { RegisterUserInput } from './dto/register.Dto';
import { UpdateAuthInput } from './dto/update-auth.input';
import { AuthPayload } from './entities/auth.payload';
import { loginInput } from './dto/login.Dto';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthPayload)
  register(
    @Context() ctx: any,
    @Args({ name: 'input', type: () => RegisterUserInput })
    input: RegisterUserInput,
  ) {
    return this.authService.register(input);
  }

  @Mutation(() => AuthPayload)
  logIn(@Args({ name: 'input' }) loginInput: loginInput) {
    return this.authService.login(loginInput);
  }

  @Mutation(() => Auth)
  logOut(@Args('id', { type: () => Int }) id: number) {
    return this.authService.remove(id);
  }
}
