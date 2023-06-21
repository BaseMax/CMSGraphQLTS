import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { IsEmail, IsNumber } from 'class-validator';
import { RegisterUserInput } from 'src/auth/dto/register.Dto';

@InputType()
export class UpdateUserInput extends PartialType(RegisterUserInput) {
  @IsNumber()
  @Field(() => Int)
  id: number;
}

@InputType()
export class MakeAdminInput {
  @IsEmail()
  @Field()
  email: string;
}
