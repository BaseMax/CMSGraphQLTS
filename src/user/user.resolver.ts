import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { Role, User } from './entities/user.entity';
import { UpdateUserInput } from './Dto/user-update.input';
import { Roles } from 'src/auth/decorators/set-role';
import { UseGuards } from '@nestjs/common';
import { AtGuard } from 'src/auth/guards/auth.gaurd';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User], { name: 'user' })
  findAll() {
    return this.userService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userService.findOne(id);
  }

  @UseGuards(AtGuard)
  @Roles(Role.admin)
  @Mutation(() => User)
  makeAdmin() {}

  
  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.userService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => User)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.userService.remove(id);
  }
}
