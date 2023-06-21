import { InputType, Int, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreateFaqInput {
  @IsString()
  @Field()
  question: string;

  @IsString()
  @Field()
  answer: string;
}
