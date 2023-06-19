import { RegisterUserInput } from './register.Dto';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAuthInput extends PartialType(RegisterUserInput) {
  @Field(() => Int)
  id: number;
}
