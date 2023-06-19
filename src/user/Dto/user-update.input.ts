import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { RegisterUserInput } from 'src/auth/dto/register.Dto';

@InputType()
export class UpdateUserInput extends PartialType(RegisterUserInput) {
  @Field(() => Int)
  id: number;
}
